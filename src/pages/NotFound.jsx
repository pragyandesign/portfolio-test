import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="animate-fade-in container"
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '60px'
      }}
    >
      <div className="tag-bracket" style={{ marginBottom: '16px' }}>
        <span>[404]</span> Page Not Found
      </div>
      <h1 className="hero-title" style={{ marginBottom: '16px' }}>
        Oops! Page standard lost.
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '450px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <Home size={16} /> Back to Home
      </Link>
    </div>
  );
}
