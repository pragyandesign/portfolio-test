import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';

export default function Work() {
  const [filter, setFilter] = useState('All');

  const industries = ['All', 'Travel', 'Fintech', 'Healthcare', 'E-Commerce'];

  const filteredCases = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.industry.toLowerCase() === filter.toLowerCase());

  return (
    <div className="animate-fade-in" style={{ paddingTop: '40px' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <div className="tag-bracket" style={{ marginBottom: '16px' }}>
            <span>💼</span> [Cases]
          </div>
          <h1 className="hero-title" style={{ marginBottom: '16px' }}>
            Selected Product & <span style={{ color: 'var(--text-accent)' }}>UX Case Studies.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Ground-up UX redesigns, checkout conversion strategies, and mobile accessibility systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.875rem',
                fontWeight: '500',
                background: filter === ind ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                color: filter === ind ? '#0c0d0e' : 'var(--text-secondary)',
                border: filter === ind ? '1px solid #ffffff' : '1px solid var(--border-color)',
                transition: 'all 0.2s ease'
              }}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                gap: '24px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    [{item.caseNumber}]
                  </span>
                  <span className="tag-bracket" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    {item.industry}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', lineHeight: 1.3 }}>
                  {item.title}
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.overview}
                </p>

                {/* Metrics Preview */}
                <div style={{ display: 'flex', gap: '16px', background: 'rgba(0, 0, 0, 0.3)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
                  {item.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-accent)' }}>{m.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.timeline}</span>
                <Link
                  to={`/work/${item.id}`}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.825rem' }}
                >
                  View Full Case Study
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
