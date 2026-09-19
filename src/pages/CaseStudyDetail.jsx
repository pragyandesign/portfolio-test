import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, User, Target, AlertTriangle, Lightbulb, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export default function CaseStudyDetail({ onOpenContact }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES.find((c) => c.id === id) || CASE_STUDIES[0];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '30px' }}>
      <div className="container">
        {/* Back link */}
        <button
          onClick={() => navigate('/work')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '32px'
          }}
        >
          <ArrowLeft size={16} /> Back to Work
        </button>

        {/* Case Header */}
        <div style={{ maxWidth: '850px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-accent)', fontSize: '0.9rem' }}>
              [{caseStudy.caseNumber}]
            </span>
            <span className="tag-bracket">{caseStudy.industry}</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '24px' }}>
            {caseStudy.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {caseStudy.overview}
          </p>
        </div>

        {/* Metadata Grid */}
        <div
          className="glass-card"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
              [Industry]
            </div>
            <div style={{ fontWeight: '600', color: '#ffffff' }}>{caseStudy.industry}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
              [My Role]
            </div>
            <div style={{ fontWeight: '600', color: '#ffffff' }}>{caseStudy.role}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
              [Platforms]
            </div>
            <div style={{ fontWeight: '600', color: '#ffffff' }}>{caseStudy.platforms}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
              [Timeline]
            </div>
            <div style={{ fontWeight: '600', color: '#ffffff' }}>{caseStudy.timeline}</div>
          </div>
        </div>

        {/* Metrics Banner */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px' }}>
            Quantitative Impact & Outcomes
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '28px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-accent)', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>
                  {m.value}
                </div>
                <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '6px' }}>{m.label}</div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{m.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="glass-card" style={{ marginBottom: '64px', padding: '40px' }}>
          <div className="tag-bracket" style={{ marginBottom: '16px' }}>
            <span>⚠️</span> [Problem Statement]
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
            {caseStudy.problemStatement}
          </p>
        </section>

        {/* Target Persona Section */}
        {caseStudy.persona && (
          <section style={{ marginBottom: '64px' }}>
            <div className="tag-bracket" style={{ marginBottom: '20px' }}>
              <span>👤</span> [User Persona]
            </div>

            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.2)',
                    color: '#60a5fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <User size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff' }}>{caseStudy.persona.name}</h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {caseStudy.persona.title} • Age {caseStudy.persona.age} • {caseStudy.persona.location}
                  </div>
                </div>
              </div>

              {/* Persona Quote */}
              <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', background: 'rgba(0, 0, 0, 0.3)', padding: '16px 20px', borderRadius: 'var(--radius-sm)', marginBottom: '28px' }}>
                "{caseStudy.persona.quote}"
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
                {/* Goals */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#4ade80', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Target size={16} /> User Goals
                  </h4>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {caseStudy.persona.goals.map((g, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{g}</li>
                    ))}
                  </ul>
                </div>

                {/* Frustrations */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#f87171', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertTriangle size={16} /> Key Frustrations
                  </h4>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {caseStudy.persona.frustrations.map((f, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process Steps */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px' }}>
            Design Process & Methodology
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {caseStudy.process.map((p) => (
              <div key={p.step} className="glass-card">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-accent)', marginBottom: '12px' }}>
                  [{p.step}]
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '8px', color: '#ffffff' }}>
                  {p.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Learnings */}
        <section className="glass-card" style={{ padding: '40px' }}>
          <div className="tag-bracket" style={{ marginBottom: '20px' }}>
            <Lightbulb size={13} style={{ color: '#fbbf24' }} /> [Key Learnings]
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {caseStudy.keyLearnings.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={18} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
