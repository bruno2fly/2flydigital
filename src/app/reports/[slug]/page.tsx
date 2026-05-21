'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ReportData {
  clientName: string;
  clientLocation: string;
  primaryContact: string;
  contactRole: string;
  owners: string;
  startDate: string;
  endDate: string;
  monthlyRetainer: string;
  totalRetainerMonths: string;
  emailOpenRate: string;
  emailBlastCount: string;
  emailListSize: string;
  slug: string;
  generatedAt: string;
}

export default function ReportPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [reportData, setReportData] = useState<ReportData | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const data = localStorage.getItem(`report_${slug}`);
      if (data) {
        setReportData(JSON.parse(data));
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [slug]);

  if (!reportData) {
    return <div style={styles.error}>Report not found</div>;
  }

  const totalRetainer = parseInt(reportData.monthlyRetainer) * parseInt(reportData.totalRetainerMonths);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <h1>2FLY Digital Marketing × {reportData.clientName}</h1>
          <h2 style={styles.subtitle}>Marketing Performance Report</h2>
          <div style={styles.meta}>
            <p>
              <strong>Period:</strong> {reportData.startDate} – {reportData.endDate}
            </p>
            <p>
              <strong>Client:</strong> {reportData.clientName} ({reportData.clientLocation})
            </p>
            <p>
              <strong>Primary Contact:</strong> {reportData.primaryContact} ({reportData.contactRole})
            </p>
            <p>
              <strong>Owners:</strong> {reportData.owners}
            </p>
            <p>
              <strong>Generated:</strong> {reportData.generatedAt}
            </p>
          </div>
        </header>

        <h2 style={styles.sectionTitle}>Executive Summary</h2>
        <div style={styles.highlight}>
          <strong>Total Marketing Investment:</strong>
          <br />
          ${totalRetainer.toLocaleString()} retainer + ads = <strong>Total investment</strong>
          <br />
          <br />
          <strong>Key Results:</strong>
          <br />✓ Email open rate: <strong>{reportData.emailOpenRate}%+</strong> (industry avg: 20-25%)
          <br />✓ Monthly email blasts: <strong>{reportData.emailBlastCount}/
{reportData.totalRetainerMonths} months delivered</strong>
          <br />
          ✓ Email list size: <strong>{reportData.emailListSize}+ contacts</strong>
        </div>

        <h2 style={styles.sectionTitle}>1. Investment Overview</h2>

        <h3 style={styles.h3}>Marketing Retainer</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Item</th>
              <th style={styles.th}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Monthly Retainer</td>
              <td style={styles.td}>${reportData.monthlyRetainer}</td>
            </tr>
            <tr>
              <td style={styles.td}>Period</td>
              <td style={styles.td}>
                {reportData.startDate} – {reportData.endDate} ({reportData.totalRetainerMonths} months)
              </td>
            </tr>
            <tr>
              <td style={{ ...styles.td, fontWeight: 'bold' }}>Total Retainer</td>
              <td style={{ ...styles.td, fontWeight: 'bold' }}>${totalRetainer.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>2. Email Marketing Performance</h2>
        <ul style={styles.list}>
          <li>
            <strong>Monthly email blasts:</strong> {reportData.emailBlastCount}/{reportData.totalRetainerMonths} months executed ✓
          </li>
          <li>
            <strong>Average open rate:</strong> {reportData.emailOpenRate}%+ (industry average: 20-25%)
          </li>
          <li>
            <strong>Email list size:</strong> {reportData.emailListSize}+ contacts
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>3. Services Delivered</h2>

        <h3 style={styles.h3}>Email Marketing</h3>
        <ul style={styles.list}>
          <li>Monthly promotional emails sent every month ({reportData.emailBlastCount}/{reportData.totalRetainerMonths} months)</li>
          <li>Consistent {reportData.emailOpenRate}%+ open rate performance</li>
          <li>Audience segmentation and list management</li>
          <li>Monthly special offers highlighted and promoted</li>
        </ul>

        <h3 style={styles.h3}>Website Management & Updates</h3>
        <ul style={styles.list}>
          <li>Monthly specials updated every month</li>
          <li>Popup promotions and landing pages updated monthly</li>
          <li>Emergency response to critical issues</li>
          <li>Security hardened against unauthorized access</li>
        </ul>

        <h3 style={styles.h3}>Social Media Content</h3>
        <ul style={styles.list}>
          <li>Monthly content calendar created and executed</li>
          <li>In-person content shoots coordinated</li>
          <li>Photography and video production</li>
          <li>Content approval workflow management</li>
        </ul>

        <h2 style={styles.sectionTitle}>4. Going Forward</h2>
        <p>Starting next month, 2FLY Digital Marketing will send monthly performance reports covering:</p>
        <ul style={styles.list}>
          <li>Email campaign results (open rates, click rates, engagement)</li>
          <li>Website traffic and user behavior</li>
          <li>New client acquisition metrics</li>
          <li>Monthly action items and strategy updates</li>
        </ul>

        <div style={styles.footer}>
          <p>
            <strong>2FLY Digital Marketing</strong>
          </p>
          <p>Contact: Bruno@2flydigital.com</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f9fafb',
    padding: '60px 40px',
  } as React.CSSProperties,
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    background: 'white',
    padding: '60px 40px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  header: {
    marginBottom: '50px',
    borderBottom: '3px solid #0a0a0a',
    paddingBottom: '30px',
  } as React.CSSProperties,
  subtitle: {
    fontSize: '1.4rem',
    color: '#666',
    fontWeight: '400',
    marginTop: '0',
  } as React.CSSProperties,
  meta: {
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.8',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#0a0a0a',
    marginTop: '45px',
    marginBottom: '20px',
  } as React.CSSProperties,
  h3: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginTop: '25px',
    marginBottom: '15px',
  } as React.CSSProperties,
  highlight: {
    background: '#fef3c7',
    padding: '25px',
    borderLeft: '4px solid #f59e0b',
    margin: '25px 0',
    borderRadius: '4px',
  } as React.CSSProperties,
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '25px 0',
    fontSize: '0.95rem',
  } as React.CSSProperties,
  th: {
    background: '#f3f4f6',
    padding: '12px 16px',
    textAlign: 'left' as const,
    fontWeight: '600',
    color: '#0a0a0a',
    borderBottom: '2px solid #d1d5db',
  } as React.CSSProperties,
  td: {
    padding: '12px 16px',
    borderBottom: '1px solid #e5e7eb',
  } as React.CSSProperties,
  list: {
    marginLeft: '25px',
    marginTop: '12px',
  } as React.CSSProperties,
  error: {
    padding: '40px',
    textAlign: 'center' as const,
    color: '#dc2626',
    fontSize: '1.1rem',
  } as React.CSSProperties,
  footer: {
    marginTop: '60px',
    paddingTop: '30px',
    borderTop: '2px solid #e5e7eb',
    color: '#666',
    fontSize: '0.9rem',
    textAlign: 'center' as const,
  } as React.CSSProperties,
};
