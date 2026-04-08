'use client';
import { useRouter } from 'next/navigation';

const destinations = [
  { city: 'Lahore', country: 'Pakistan', price: 8500, emoji: '🏛️', desc: 'City of Gardens' },
  { city: 'Islamabad', country: 'Pakistan', price: 9200, emoji: '🏔️', desc: 'The Capital City' },
  { city: 'Peshawar', country: 'Pakistan', price: 11000, emoji: '🕌', desc: 'Historic Gateway' },
  { city: 'Quetta', country: 'Pakistan', price: 12500, emoji: '🌹', desc: 'Fruit Garden of Pakistan' },
  { city: 'Multan', country: 'Pakistan', price: 7800, emoji: '🌆', desc: 'City of Saints' },
  { city: 'Dubai', country: 'UAE', price: 45000, emoji: '🌇', desc: 'City of Gold' },
];

export default function PopularDestinations() {
  const router = useRouter();

  return (
    <section style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">Explore top destinations with amazing deals</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {destinations.map(dest => (
            <div
              key={dest.city}
              onClick={() => router.push('/flights')}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--gray-200)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                background: 'white',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px',
              }}>
                {dest.emoji}
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '2px' }}>{dest.city}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{dest.country} · {dest.desc}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: 'var(--gray-400)' }}>from</div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {dest.price.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
