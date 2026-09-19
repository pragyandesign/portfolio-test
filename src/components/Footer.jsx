import React from 'react';
import { Mail, ArrowUpRight, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({ onOpenContact }) {
  return (
    <footer
      style={{
        background: '#08090a',
        borderTop: '1px solid var(--border-color)',
        padding: '80px 0 40px 0',
        marginTop: '80px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            paddingBottom: '60px',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div className="tag-bracket">
            <span>👋</span> Let's Connect
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              maxWidth: '700px',
              lineHeight: 1.25
            }}
          >
            Yay! We've made it to the finish line. Say 👋 hi!
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
            Have a project in mind, a question about UX design, or just want to connect?
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '12px' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-primary"
            >
              <Mail size={16} />
              {PERSONAL_INFO.email}
            </a>

            <button onClick={onOpenContact} className="btn-secondary">
              Let's Talk
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Socials & Credit */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            paddingTop: '32px',
            fontSize: '0.875rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {PERSONAL_INFO.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {s.name}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
