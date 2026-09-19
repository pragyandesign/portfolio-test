import React from 'react';
import { Award, CheckCircle, ExternalLink, Download, FileText, Check } from 'lucide-react';
import { CREDENTIALS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function Credentials({ onOpenContact }) {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <div className="tag-bracket" style={{ marginBottom: '16px' }}>
            <span>🎓</span> [Credentials]
          </div>

          <h1 className="hero-title" style={{ marginBottom: '16px' }}>
            {CREDENTIALS_DATA.headline}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {CREDENTIALS_DATA.subhead}
          </p>
        </div>

        {/* Certificate Card */}
        <section style={{ marginBottom: '64px' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
              <div>
                <div className="tag-bracket" style={{ marginBottom: '12px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                  <Award size={14} /> Google Certified
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
                  {CREDENTIALS_DATA.certificate.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {CREDENTIALS_DATA.certificate.issuer} • {CREDENTIALS_DATA.certificate.coursesCount}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={CREDENTIALS_DATA.certificate.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Verify Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Certificate Skills Grid */}
            <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Skills & Tools Mastered
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {CREDENTIALS_DATA.certificate.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <Check size={14} style={{ color: '#4ade80' }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Card */}
        <section>
          <div className="glass-card" style={{ padding: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
            <div style={{ maxWidth: '600px' }}>
              <div className="tag-bracket" style={{ marginBottom: '12px' }}>
                <FileText size={13} /> [Resume]
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>
                {CREDENTIALS_DATA.resume.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {CREDENTIALS_DATA.resume.summary}
              </p>
            </div>

            <button onClick={onOpenContact} className="btn-primary">
              <Download size={16} /> Request Updated CV
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
