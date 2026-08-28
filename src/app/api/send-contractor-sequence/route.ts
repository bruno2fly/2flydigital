import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import { AuthenticationProvider } from '@microsoft/microsoft-graph-client';

// Custom Auth Provider for OAuth2
class CustomAuthProvider implements AuthenticationProvider {
  private clientId = 'fa354df8-f675-4582-93ab-56e56bbdd95c';
  private tenantId = 'b5ba825c-def8-4e7a-a677-37fc0916d362';
  private clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  async getAccessToken(): Promise<string> {
    const tokenUrl = `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/token`;
    
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret!,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials'
    });

    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(`OAuth error: ${data.error} - ${data.error_description}`);
    }
    
    return data.access_token;
  }
}

// Email Templates
const EMAIL_TEMPLATES = {
  email1: {
    subject: (city: string) => `Missing 80% of ${city} leads?`,
    body: (name: string, city: string) => `
Hi ${name},

When someone needs HVAC work in ${city}, they Google "HVAC repair ${city}" or "heating contractor near me" - and most contractors are invisible.

Here's the problem: Without Google Ads, you're missing roughly 8 out of every 10 potential leads. Your competitors with Google Ads are capturing those leads while you're waiting for referrals.

We help MA contractors dominate their local Google search through professional Google Ads management. Typical result: $12K-15K extra monthly revenue within 90 days.

Our Google Ads system:
- Captures high-intent leads 24/7
- Targets customers actively searching in your service area  
- Optimized for contractors (not generic businesses)
- $1,000/month management + your ad spend

Worth a 15-minute conversation to see what's possible?

Bruno Lima
2FLY Digital Marketing
bruno@2flydigital.com
(781) 606-2445

P.S. We only work with 3 contractors per city to avoid conflicts. ${city} still has openings.
    `
  },
  email2: {
    subject: (company: string) => `How JT Fence added $18K/month`,
    body: (name: string) => `
${name},

Quick follow-up on your Google Ads potential.

JT Fence in Quincy was struggling to get consistent leads 6 months ago. Relying on referrals, inconsistent workload, competing with bigger companies.

Now they're doing an extra $18,000/month through our Google Ads management. All high-quality leads: repairs, installations, commercial projects.

The difference? Professional Google Ads setup designed specifically for contractors:
- High-intent keyword targeting ("HVAC repair near me", "heating contractor", etc.)
- Geographic targeting to your exact service area
- Call tracking and lead qualification
- Optimized for mobile (where most searches happen)

Same Google Ads system could work for your business. 15 minutes to show you the numbers?

Bruno Lima
2FLY Digital Marketing

P.S. Here's their actual Google Ads performance: 172 conversions/month, 4.99% CTR, $65 average cost per lead. We can show you the dashboard.
    `
  },
  email3: {
    subject: (city: string) => `Your ${city} competitors are moving`,
    body: (name: string, city: string) => `
${name},

Noticed 3 other ${city} contractors just started Google Ads campaigns this month. They're showing up at the top of search results while you're buried on page 2.

Question: Do you want to be the contractor who adapts, or the one who gets left behind?

We have one spot open for a ${city} contractor in our Q3 Google Ads program. After that, we focus on other cities.

15-minute call to discuss your Google Ads strategy?

Bruno Lima
2FLY Digital Marketing
bruno@2flydigital.com

P.S. The contractors who invest in Google Ads first in their market capture the most leads. Don't wait until your competitors dominate the search results.
    `
  }
};

export async function POST(req: NextRequest) {
  try {
    const { 
      email, 
      name, 
      company, 
      city, 
      sequence_step,
      test_mode = false 
    } = await req.json();

    // Validate required fields
    if (!email || !name || !city || !sequence_step) {
      return NextResponse.json(
        { error: 'Missing required fields: email, name, city, sequence_step' },
        { status: 400 }
      );
    }

    if (!['email1', 'email2', 'email3'].includes(sequence_step)) {
      return NextResponse.json(
        { error: 'Invalid sequence_step. Must be email1, email2, or email3' },
        { status: 400 }
      );
    }

    // Get email template
    const template = EMAIL_TEMPLATES[sequence_step as keyof typeof EMAIL_TEMPLATES];
    const subject = template.subject(city);
    const body = template.body(name, city);

    // Initialize Microsoft Graph client
    const authProvider = new CustomAuthProvider();
    const graphClient = Client.initWithMiddleware({ authProvider });

    // Prepare email message
    const message = {
      subject: subject,
      body: {
        contentType: 'Text',
        content: body
      },
      toRecipients: [
        {
          emailAddress: {
            address: email,
            name: name
          }
        }
      ],
      from: {
        emailAddress: {
          address: 'bruno@2flydigital.com',
          name: 'Bruno Lima - 2FLY Digital Marketing'
        }
      },
      replyTo: [
        {
          emailAddress: {
            address: 'bruno@2flydigital.com',
            name: 'Bruno Lima'
          }
        }
      ]
    };

    if (test_mode) {
      // Test mode - just return the email content without sending
      return NextResponse.json({
        success: true,
        test_mode: true,
        email_preview: {
          to: `${name} <${email}>`,
          from: 'Bruno Lima - 2FLY Digital Marketing <bruno@2flydigital.com>',
          subject: subject,
          body: body
        }
      });
    }

    // Send email via Microsoft Graph API
    await graphClient
      .api('/users/bruno@2flydigital.com/sendMail')
      .post({ message });

    // Log the send (you could expand this to a proper database)
    console.log(`Email sent: ${sequence_step} to ${email} (${name}, ${city})`);

    return NextResponse.json({
      success: true,
      message: `${sequence_step} sent successfully to ${email}`,
      details: {
        recipient: `${name} <${email}>`,
        subject: subject,
        sent_at: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Email send error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// GET endpoint for testing
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const test = searchParams.get('test');
  
  if (test === 'true') {
    return NextResponse.json({
      status: 'API is working',
      endpoints: {
        'POST /api/send-contractor-sequence': {
          description: 'Send contractor email sequence',
          required_fields: ['email', 'name', 'city', 'sequence_step'],
          sequence_steps: ['email1', 'email2', 'email3'],
          test_mode: 'Add test_mode: true to preview without sending'
        }
      },
      example_request: {
        email: 'contractor@example.com',
        name: 'John Smith',
        company: 'Smith HVAC',
        city: 'Worcester',
        sequence_step: 'email1',
        test_mode: true
      }
    });
  }
  
  return NextResponse.json({ error: 'Use POST method to send emails' }, { status: 405 });
}