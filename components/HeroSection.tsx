'use client';
import SearchBar from '@/components/SearchBar';

export default function HeroSection() {
  return (
    <section className="hero-gradient" style={{ padding: '60px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '900', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
            Travel Pakistan with Ease
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', margin: '0 auto' }}>
            Compare and book flights, hotels, and buses at the best prices. Your journey starts here.
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SearchBar />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px', flexWrap: 'wrap' }}>
          {[
            { icon: '✈️', label: '500+ Flights Daily' },
            { icon: '🏨', label: '2000+ Hotels' },
            { icon: '🚌', label: '100+ Bus Routes' },
            { icon: '💰', label: 'Best Price Guarantee' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)' }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
