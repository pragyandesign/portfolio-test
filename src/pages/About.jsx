import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Radio, Compass, Award, ArrowRight } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function About({ onOpenContact }) {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Header Tag & Title */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <div className="tag-bracket" style={{ marginBottom: '16px' }}>
            <span>[About]</span> Pragyan Chaudhary
          </div>

          <h1 className="hero-title" style={{ marginBottom: '24px' }}>
            Brand Strategy Background. <span style={{ color: 'var(--text-accent)' }}>UX Focus.</span>
          </h1>

          {/* Leonardo da Vinci Quote */}
          <div
            style={{
              borderLeft: '3px solid var(--text-accent)',
              paddingLeft: '24px',
              margin: '32px 0',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '20px 24px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}
          >
            <p className="serif-quote" style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>
              "{ABOUT_DATA.quote}"
            </p>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              — {ABOUT_DATA.quoteAuthor}
            </span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
            {ABOUT_DATA.bioParagraph1}
          </p>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {ABOUT_DATA.bioParagraph2}
          </p>
        </div>

        {/* What Can I Do Pillars */}
        <section style={{ marginBottom: '80px' }}>
          <div className="tag-bracket" style={{ marginBottom: '24px' }}>
            <span>⚡</span> [What Can I Do]
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {ABOUT_DATA.pillars.map((pillar, idx) => (
              <div key={idx} className="glass-card">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-accent)',
                    marginBottom: '12px'
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {pillar.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section style={{ marginBottom: '80px' }}>
          <div className="tag-bracket" style={{ marginBottom: '24px' }}>
            <span>💼</span> [Experience]
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {ABOUT_DATA.experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '24px',
                  alignItems: 'start'
                }}
              >
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '700', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-accent)', marginBottom: '8px' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {exp.period} • {exp.location}
                  </div>
                </div>

                <div>
                  <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {exp.details.map((d, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts & Interests */}
        <section>
          <div className="tag-bracket" style={{ marginBottom: '24px' }}>
            <span>🎯</span> [Fun Facts & Inspiration]
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Books Card */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <BookOpen size={20} style={{ color: 'var(--text-accent)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Favorite Books</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ABOUT_DATA.funFacts.books.map((b, i) => (
                  <li key={i} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                    <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#ffffff' }}>{b.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>by {b.author}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Podcasts Card */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Radio size={20} style={{ color: 'var(--text-accent)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Favorite Podcast</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ABOUT_DATA.funFacts.podcasts.map((p, i) => (
                  <li key={i} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                    <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#ffffff' }}>{p.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hosted by {p.host}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active Hobby Card */}
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Compass size={20} style={{ color: 'var(--text-accent)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Active Hobby</h3>
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '1rem', color: '#ffffff', marginBottom: '6px' }}>
                  {ABOUT_DATA.funFacts.hobby.name}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {ABOUT_DATA.funFacts.hobby.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
