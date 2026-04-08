'use client';
import { useRouter } from 'next/navigation';

const deals = [
  { id: 1, title: 'Karachi to Dubai', discount: '30% OFF', price: 45000, originalPrice: 64000, type: 'Flight', emoji: '✈️', badge: 'HOT' },
  { id: 2, title: 'Islamabad Weekend', discount: '25% OFF', price: 12000, originalPrice: 16000, type: 'Hotel', emoji: '🏨', badge: 'NEW' },
  { id: 3, title: 'Karachi to Lahore Bus', discount: '20% OFF', price: 1800, originalPrice: 2250, type: 'Bus', emoji: '🚌', badge: 'DEAL' },
  { id: 4, title: 'Lahore to Karachi', discount: '15% OFF', price: 9500, originalPrice: 11200, type: 'Flight', emoji: '✈️', badge: '' },
];

export default function DealsSection() {
  const router = useRouter();

  return (
    <section style={{ padding: '60px 0', background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h2 className="section-title">Today&apos;s Best Deals</h2>
            <p className="section-subtitle">Limited time offers — Book now before they&apos;re gone!</p>
          </div>
          <button
            onClick={() => router.push('/deals')}
            style={{
              padding: '10px 20px',
              border: '2px solid var(--primary)',
              borderRadius: 'var(--radius)',
              background: 'transparent',
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            View All Deals
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {deals.map(deal => (
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
              onClick={() => router.push('/flights')}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)';
              }}
            >
              <div style={{
                height: '100px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                position: 'relative',
              }}>
                {deal.emoji}
                {deal.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'var(--secondary)',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '10px',
                    fontWeight: '700',
                  }}>
                    {deal.badge}
                  </span>
                )}
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginBottom: '4px', textTransform: 'uppercase', fontWeight: '600' }}>{deal.type}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '12px' }}>{deal.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {deal.price.toLocaleString()}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-400)', textDecoration: 'line-through', marginLeft: '6px' }}>PKR {deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <span style={{
                    background: 'var(--success-light)',
                    color: 'var(--success)',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    fontWeight: '700',
                  }}>
                    {deal.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
