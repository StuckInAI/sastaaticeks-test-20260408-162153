'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const allDeals = [
  { id: 1, title: 'Karachi to Dubai', category: 'Flight', discount: 30, price: 45000, originalPrice: 64000, emoji: '✈️', badge: 'HOT', expiry: '2 days left', desc: 'Direct flight with PIA. Economy class.' },
  { id: 2, title: 'Islamabad Weekend Getaway', category: 'Hotel', discount: 25, price: 12000, originalPrice: 16000, emoji: '🏨', badge: 'NEW', expiry: '5 days left', desc: '2 nights at Marriott. Breakfast included.' },
  { id: 3, title: 'Karachi to Lahore Bus', category: 'Bus', discount: 20, price: 1800, originalPrice: 2250, emoji: '🚌', badge: 'DEAL', expiry: '1 day left', desc: 'Daewoo Business Plus class.' },
  { id: 4, title: 'Lahore to Karachi', category: 'Flight', discount: 15, price: 9500, originalPrice: 11200, emoji: '✈️', badge: '', expiry: '7 days left', desc: 'Serene Air economy class.' },
  { id: 5, title: 'Quetta Heritage Tour', category: 'Hotel', discount: 35, price: 8000, originalPrice: 12300, emoji: '🏨', badge: 'HOT', expiry: '3 days left', desc: 'Serena Hotel, 3 nights.' },
  { id: 6, title: 'Karachi to Islamabad', category: 'Flight', discount: 18, price: 11000, originalPrice: 13400, emoji: '✈️', badge: '', expiry: '10 days left', desc: 'Airblue economy class.' },
  { id: 7, title: 'Multan to Lahore Bus', category: 'Bus', discount: 22, price: 900, originalPrice: 1150, emoji: '🚌', badge: 'DEAL', expiry: '4 days left', desc: 'Faisal Movers Executive.' },
  { id: 8, title: 'Lahore City Hotel', category: 'Hotel', discount: 28, price: 5500, originalPrice: 7600, emoji: '🏨', badge: 'NEW', expiry: '6 days left', desc: 'Avari Hotel, 1 night.' },
];

export default function DealsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Flight', 'Hotel', 'Bus'];

  const filtered = allDeals.filter(d => activeCategory === 'All' || d.category === activeCategory);

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0057b8, #003d82)', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '900', color: 'white', marginBottom: '12px' }}>🏷️ Today&apos;s Best Deals</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', maxWidth: '500px', margin: '0 auto' }}>Limited time offers on flights, hotels & buses. Book now before they expire!</p>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 16px' }}>
        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-full)',
                border: `2px solid ${activeCategory === cat ? 'var(--primary)' : 'var(--gray-300)'}`,
                background: activeCategory === cat ? 'var(--primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--gray-600)',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat === 'All' ? 'All Deals' : cat === 'Flight' ? '✈️ Flights' : cat === 'Hotel' ? '🏨 Hotels' : '🚌 Buses'}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {filtered.map(deal => (
            <div
              key={deal.id}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid var(--gray-100)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)';
              }}
            >
              <div style={{
                height: '120px',
                background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '56px',
                position: 'relative',
              }}>
                {deal.emoji}
                {deal.badge && (
                  <span style={{
                    position: 'absolute', top: '10px', right: '10px',
                    background: 'var(--secondary)', color: 'white',
                    padding: '3px 10px', borderRadius: 'var(--radius-full)',
                    fontSize: '10px', fontWeight: '700'
                  }}>
                    {deal.badge}
                  </span>
                )}
                <span style={{
                  position: 'absolute', bottom: '10px', left: '10px',
                  background: 'rgba(0,0,0,0.4)', color: 'white',
                  padding: '3px 8px', borderRadius: 'var(--radius-full)',
                  fontSize: '11px', fontWeight: '600'
                }}>
                  ⏰ {deal.expiry}
                </span>
              </div>
              <div style={{ padding: '18px' }}>
                <div style={{ fontSize: '11px', color: 'var(--gray-400)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>{deal.category}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '6px' }}>{deal.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '14px' }}>{deal.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div>
                    <span style={{ fontSize: '22px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {deal.price.toLocaleString()}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-400)', textDecoration: 'line-through', marginLeft: '6px' }}>PKR {deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <span style={{ background: 'var(--success-light)', color: 'var(--success)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: '700' }}>
                    {deal.discount}% OFF
                  </span>
                </div>
                <button
                  onClick={() => router.push('/flights')}
                  style={{
                    width: '100%',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '12px',
                    borderRadius: 'var(--radius)',
                    fontWeight: '700',
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Grab This Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
