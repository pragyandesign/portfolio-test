import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Credentials', path: '/credentials' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(12, 13, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '18px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo / Name */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-heading)'
            }}
          >
            PC
          </div>
          <div>
            <div style={{ fontWeight: '600', fontSize: '0.95rem', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
              {PERSONAL_INFO.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {PERSONAL_INFO.role}
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
        >
          <Link
            to="/"
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: location.pathname === '/' ? '#ffffff' : 'var(--text-secondary)',
              background: location.pathname === '/' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              transition: 'all 0.2s ease'
            }}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions / CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Mail size={15} />
            Let's Talk
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-primary)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '73px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(12, 13, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <Link
            to="/"
            style={{ fontSize: '1.25rem', fontWeight: '600', color: location.pathname === '/' ? '#ffffff' : 'var(--text-secondary)' }}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: location.pathname.startsWith(link.path) ? '#ffffff' : 'var(--text-secondary)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <hr style={{ borderColor: 'var(--border-color)', margin: '12px 0' }} />
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
            className="btn-primary"
            style={{ justifyContent: 'center', width: '100%', padding: '14px' }}
          >
            <Mail size={18} />
            Let's Talk
          </button>
        </div>
      )}

      {/* Inline styles for responsive layout */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
