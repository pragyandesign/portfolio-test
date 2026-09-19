import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, CASE_STUDIES } from '../data/portfolioData';

export default function Home({ onOpenContact }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section-spacing" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <div className="tag-bracket" style={{ marginBottom: '24px' }}>
              <span>👋</span> {PERSONAL_INFO.badge}
            </div>

            <h1 className="hero-title" style={{ marginBottom: '24px' }}>
              Creative <span style={{ color: 'var(--accent-lime)' }}>Designer</span> Crafting Digital Experiences.
            </h1>

            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '36px',
                maxWidth: '720px'
              }}
            >
              UX designer | Thinking out loud about products that frustrate me. Brand strategy background. Building thoughtful products that put user intent first.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <Link to="/work" className="btn-accent">
                View All Work
                <ArrowRight size={16} />
              </Link>
              <button onClick={onOpenContact} className="btn-secondary">
                Let's Talk
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Showcase Banner (LawHub) */}
      <section style={{ marginBottom: '80px' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              background: '#1f1e1f',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="tag-bracket" style={{ marginBottom: '16px' }}>
                <Sparkles size={13} /> Featured Project
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: '800', marginBottom: '16px', lineHeight: 1.2 }}>
                LawHub — Framer Website Development
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6, fontSize: '1.05rem' }}>
                A modern digital presence engineered for India's legal tech platform, combining crisp brand identity, responsive layouts, and interactive design systems.
              </p>
              <Link to="/work/enhancing-travel-planning-25-more-bookings" className="btn-secondary">
                Read Full Story
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual Graphic Representation */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                background: '#171617'
              }}
            >
              <img
                src={PERSONAL_INFO.banner}
                alt="LawHub Showcase"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-spacing" style={{ background: '#171617', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <div className="tag-bracket" style={{ marginBottom: '16px' }}>
                <span>📁</span> [Cases]
              </div>
              <h2 className="section-title">Selected Case Studies</h2>
            </div>
            <Link to="/work" className="btn-secondary" style={{ display: 'inline-flex' }}>
              View All Cases
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Cases Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {CASE_STUDIES.map((item) => (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  gap: '24px',
                  padding: '0',
                  overflow: 'hidden'
                }}
              >
                {/* Case Cover Image */}
                <div style={{ height: '240px', overflow: 'hidden', background: '#141314', borderBottom: '1px solid var(--border-color)' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                <div style={{ padding: '0 28px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        [{item.caseNumber}]
                      </span>
                      <span className="tag-bracket" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                        [{item.industry}]
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '700', marginBottom: '12px', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.overview}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.tag}</span>
                    <Link
                      to={`/work/${item.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--accent-lime)',
                        fontWeight: '600',
                        fontSize: '0.875rem'
                      }}
                    >
                      Read Full Story
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section Preview */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '56px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="tag-bracket" style={{ marginBottom: '16px' }}>
                <span>👤</span> [About Me]
              </div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>
                Product Designer based in Haryana, India.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Hey, I'm Pragyan Chaudhary. I started in brand identity, building visual systems for businesses, which taught me that design is always communicating something, whether you intend it or not.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                That obsession with intentional design led me to UX. My first case study is a ground-up redesign of India's government OPD booking system, built for users who can't afford to get it wrong. I design for clarity, not applause.
              </p>
              <Link to="/about" className="btn-accent">
                More About Me
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Profile Avatar Card with Framer Image */}
            <div
              style={{
                background: '#141314',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--accent-lime)',
                  boxShadow: '0 12px 32px rgba(223, 252, 161, 0.2)'
                }}
              >
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: 'var(--text-primary)' }}>Pragyan Chaudhary</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>UX Designer & Brand Strategist</p>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span className="tag-bracket" style={{ fontSize: '0.75rem' }}>Google Certified</span>
                <span className="tag-bracket" style={{ fontSize: '0.75rem' }}>Framer & Figma</span>
                <span className="tag-bracket" style={{ fontSize: '0.75rem' }}>Accessibility First</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
