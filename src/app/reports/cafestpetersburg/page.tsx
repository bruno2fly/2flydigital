"use client";

import { useState, useEffect } from "react";

const REPORT_PASSWORD = "stpete2026";
const SESSION_KEY = "report_stpete_auth";

export default function CafeStPetersburgReport() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored === "true") setUnlocked(true);
      setChecking(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === REPORT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (checking) return null;

  if (unlocked) {
    return (
      <iframe
        src="https://2fly-cafe-stpete-report.vercel.app/"
        style={{ width: "100%", height: "100vh", border: "none", display: "block" }}
        title="Cafe St. Petersburg — Performance Report"
      />
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a120a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "24px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        textAlign: "center",
      }}>
        {/* Logo */}
        <div style={{
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "8px",
        }}>
          2FLY<span style={{ color: "var(--accent)" }}>.</span> Digital Marketing
        </div>

        {/* Title */}
        <div style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "6px",
          letterSpacing: "-0.01em",
        }}>
          Cafe St. Petersburg
        </div>
        <div style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "48px",
          letterSpacing: "0.04em",
        }}>
          Performance Report — Q1/Q2 2026
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Enter access code"
              autoFocus
              style={{
                width: "100%",
                padding: "14px 18px",
                background: "rgba(255,255,255,0.06)",
                border: error ? "1px solid #e55" : "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                color: "#ffffff",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                transition: "border 0.2s",
              }}
            />
          </div>

          {error && (
            <div style={{
              color: "#e55",
              fontSize: "13px",
              marginBottom: "16px",
              textAlign: "center",
            }}>
              Incorrect access code. Please try again.
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#1A3A1A",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#2a5a2a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#1A3A1A")}
          >
            View Report →
          </button>
        </form>

        <div style={{
          marginTop: "40px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.06em",
        }}>
          2flydigital.com · Confidential
        </div>
      </div>
    </div>
  );
}
