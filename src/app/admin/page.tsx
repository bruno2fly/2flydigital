'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (use env var in production)
    if (password === '2fly2026') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h1 style={styles.title}>2FLY Admin</h1>
          <p style={styles.subtitle}>Performance Report Generator</p>
          <form onSubmit={handleLogin} style={styles.form}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.button}>
              Enter
            </button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      </div>
    );
  }

  return <ReportGenerator />;
}

function ReportGenerator() {
  const [formData, setFormData] = useState({
    clientName: 'Ardan Med Spa',
    clientLocation: 'Wellesley, MA',
    primaryContact: 'Ana Elisa Sombrio',
    contactRole: 'Manager',
    owners: 'Steve Crandall, Jennifer Crandall, Marissa Hughes',
    startDate: '2025-06',
    endDate: '2026-04',
    monthlyRetainer: '1200',
    totalRetainerMonths: '11',
    adSpends: [
      { date: '2025-07-23', amount: '1997.92' },
      { date: '2025-10-02', amount: '1997.92' },
      { date: '2025-12-11', amount: '2230.74' },
    ],
    fbMetrics: {
      interactions: '93',
      growth: '520',
      clicks: '1800',
      clickGrowth: '175200',
      visits: '1300',
      visitGrowth: '175',
    },
    emailOpenRate: '50',
    emailBlastCount: '11',
    emailListSize: '600',
  });

  const [reportUrl, setReportUrl] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateReport = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate URL-friendly slug
    const slug = formData.clientName.toLowerCase().replace(/\s+/g, '-');

    // Create report data
    const reportData = {
      ...formData,
      slug,
      generatedAt: new Date().toISOString().split('T')[0],
    };

    // Store in localStorage for now (later: database)
    localStorage.setItem(`report_${slug}`, JSON.stringify(reportData));

    // Generate shareable URL
    const url = `/reports/${slug}`;
    setReportUrl(url);

    // Copy to clipboard
    navigator.clipboard.writeText(`${window.location.origin}${url}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Create Performance Report</h1>

        <form onSubmit={generateReport} style={styles.reportForm}>
          <section style={styles.section}>
            <h2>Client Information</h2>
            <input
              type="text"
              name="clientName"
              placeholder="Client Name"
              value={formData.clientName}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="text"
              name="clientLocation"
              placeholder="Location"
              value={formData.clientLocation}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="text"
              name="primaryContact"
              placeholder="Primary Contact"
              value={formData.primaryContact}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="text"
              name="contactRole"
              placeholder="Contact Role"
              value={formData.contactRole}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="text"
              name="owners"
              placeholder="Owners"
              value={formData.owners}
              onChange={handleInputChange}
              style={styles.formInput}
            />
          </section>

          <section style={styles.section}>
            <h2>Report Period</h2>
            <input
              type="month"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="month"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              style={styles.formInput}
            />
          </section>

          <section style={styles.section}>
            <h2>Investment</h2>
            <input
              type="number"
              name="monthlyRetainer"
              placeholder="Monthly Retainer ($)"
              value={formData.monthlyRetainer}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="number"
              name="totalRetainerMonths"
              placeholder="Number of Months"
              value={formData.totalRetainerMonths}
              onChange={handleInputChange}
              style={styles.formInput}
            />
          </section>

          <section style={styles.section}>
            <h2>Metrics</h2>
            <input
              type="number"
              name="emailOpenRate"
              placeholder="Email Open Rate (%)"
              value={formData.emailOpenRate}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="number"
              name="emailBlastCount"
              placeholder="Email Blasts Sent"
              value={formData.emailBlastCount}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <input
              type="number"
              name="emailListSize"
              placeholder="Email List Size"
              value={formData.emailListSize}
              onChange={handleInputChange}
              style={styles.formInput}
            />
          </section>

          <button type="submit" style={styles.submitButton}>
            Generate Report
          </button>
        </form>

        {reportUrl && (
          <div style={styles.success}>
            <p>✓ Report generated!</p>
            <p>
              Link copied to clipboard: <strong>{reportUrl}</strong>
            </p>
            <a href={reportUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Report →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f9fafb',
    padding: '40px 20px',
  } as React.CSSProperties,
  loginBox: {
    maxWidth: '400px',
    margin: '100px auto',
    background: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#0a0a0a',
  } as React.CSSProperties,
  subtitle: {
    color: '#666',
    marginBottom: '30px',
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  } as React.CSSProperties,
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '1rem',
  } as React.CSSProperties,
  button: {
    padding: '12px',
    background: '#0a0a0a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  } as React.CSSProperties,
  error: {
    color: '#dc2626',
    marginTop: '15px',
  } as React.CSSProperties,
  content: {
    maxWidth: '900px',
    margin: '0 auto',
  } as React.CSSProperties,
  reportForm: {
    background: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  } as React.CSSProperties,
  section: {
    marginBottom: '30px',
  } as React.CSSProperties,
  formInput: {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '0.95rem',
  } as React.CSSProperties,
  submitButton: {
    width: '100%',
    padding: '14px',
    background: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  } as React.CSSProperties,
  success: {
    marginTop: '30px',
    padding: '20px',
    background: '#d1fae5',
    border: '1px solid #6ee7b7',
    borderRadius: '4px',
    color: '#047857',
  } as React.CSSProperties,
  link: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#047857',
    fontWeight: 'bold',
    textDecoration: 'none',
  } as React.CSSProperties,
};
