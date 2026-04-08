'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      background: 'var(--primary)',
      boxShadow: 'var(--shadow-md)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ background: 'white', borderRadius: 'var(--radius)', padding: '6px 10px', fontWeight: '900', color: 'var(--primary)', fontSize: '18px' }}>✈</div>
          <span style={{ color: 'white', fontWeight: '800', fontSize: '20px' }}>TravelEase</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { href: '/flights', label: '✈ Flights' },
            { href: '/hotels', label: '🏨 Hotels' },
            { href: '/buses', label: '🚌 Buses' },
            { href: '/deals', label: '🏷️ Deals' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: 'rgba(255,255,255,0.9)',
                padding: '8px 14px',
                borderRadius: 'var(--radius)',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link href="/support" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', textDecoration: 'none', padding: '8px 12px', borderRadius: 'var(--radius)' }}>Support</Link>
          <Link href="/dashboard" style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: 'var(--radius)',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
          }}>My Account</Link>
          <button style={{
            background: 'var(--secondary)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: 'var(--radius)',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
          }}>Sign In</button>
        </div>
      </div>
    </nav>
  );
}
