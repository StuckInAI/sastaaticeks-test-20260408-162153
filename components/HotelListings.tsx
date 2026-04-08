'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Hotel {
  id: string;
  name: string;
  city: string;
  stars: number;
  rating: number;
  reviews: number;
  price: number;
  amenities: string[];
  type: string;
  emoji: string;
  discount?: number;
}

const hotels: Hotel[] = [
  {
    id: 'h1',
    name: 'Pearl Continental Hotel',
    city: 'Karachi',
    stars: 5,
    rating: 4.7,
    reviews: 1240,
    price: 18000,
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa', 'Parking'],
    type: 'Luxury',
    emoji: '🏨',
    discount: 15,
  },
  {
    id: 'h2',
    name: 'Marriott Hotel',
    city: 'Islamabad',
    stars: 5,
    rating: 4.8,
    reviews: 2100,
    price: 22000,
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Business Center'],
    type: 'Luxury',
    emoji: '🏨',
  },
  {
    id: 'h3',
    name: 'Avari Hotel',
    city: 'Lahore',
    stars: 5,
    rating: 4.6,
    reviews: 980,
    price: 15000,
    amenities: ['WiFi', 'Pool', 'Restaurant', 'Parking'],
    type: 'Luxury',
    emoji: '🏨',
    discount: 10,
  },
  {
    id: 'h4',
    name: 'Ramada Hotel',
    city: 'Karachi',
    stars: 4,
    rating: 4.3,
    reviews: 654,
    price: 9500,
    amenities: ['WiFi', 'Gym', 'Restaurant', 'Parking'],
    type: 'Business',
    emoji: '🏩',
  },
  {
    id: 'h5',
    name: 'City Guest House',
    city: 'Lahore',
    stars: 3,
    rating: 4.0,
    reviews: 320,
    price: 4500,
    amenities: ['WiFi', 'Parking'],
    type: 'Budget',
    emoji: '🏠',
    discount: 20,
  },
  {
    id: 'h6',
    name: 'Serena Hotel',
    city: 'Quetta',
    stars: 5,
    rating: 4.9,
    reviews: 456,
    price: 16000,
    amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa'],
    type: 'Luxury',
    emoji: '🏨',
  },
];

export default function HotelListings() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'stars'>('price');
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'Luxury', 'Business', 'Budget'];

  const filtered = hotels
    .filter(h => selectedType === 'all' || h.type === selectedType)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.stars - a.stars;
    });

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--gray-800)' }}>Hotels in Pakistan</h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>{filtered.length} hotels available</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--gray-600)', fontWeight: '600' }}>Sort by:</span>
          {(['price', 'rating', 'stars'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius)',
                border: `2px solid ${sortBy === s ? 'var(--primary)' : 'var(--gray-200)'}`,
                background: sortBy === s ? 'var(--primary)' : 'white',
                color: sortBy === s ? 'white' : 'var(--gray-600)',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {types.map(t => (
          <button
            key={t}
            onClick={() => setSelectedType(t)}
            style={{
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              border: `2px solid ${selectedType === t ? 'var(--primary)' : 'var(--gray-200)'}`,
              background: selectedType === t ? 'var(--primary-light)' : 'white',
              color: selectedType === t ? 'var(--primary)' : 'var(--gray-600)',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {t === 'all' ? 'All Types' : t}
          </button>
        ))}
      </div>

      {/* Hotel Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map(hotel => (
          <div
            key={hotel.id}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow)',
              padding: '20px',
              border: '1px solid var(--gray-100)',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* Hotel Image Placeholder */}
            <div style={{
              width: '160px',
              minHeight: '120px',
              borderRadius: 'var(--radius)',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              flexShrink: 0,
              position: 'relative',
            }}>
              {hotel.emoji}
              {hotel.discount && (
                <span style={{
                  position: 'absolute', top: '8px', right: '8px',
                  background: 'var(--secondary)', color: 'white',
                  padding: '3px 7px', borderRadius: 'var(--radius-full)',
                  fontSize: '10px', fontWeight: '700'
                }}>
                  -{hotel.discount}%
                </span>
              )}
            </div>

            {/* Details */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '4px' }}>{hotel.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#f59e0b' }}>{'★'.repeat(hotel.stars)}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{hotel.city}</span>
                  </div>
                </div>
                <span className="badge badge-primary">{hotel.type}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: 'var(--radius-sm)', fontWeight: '700', fontSize: '14px' }}>{hotel.rating}</span>
                <span style={{ fontSize: '13px', color: 'var(--gray-600)' }}>({hotel.reviews} reviews)</span>
              </div>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {hotel.amenities.map(a => (
                  <span key={a} style={{ padding: '3px 8px', background: 'var(--gray-100)', borderRadius: 'var(--radius-full)', fontSize: '11px', color: 'var(--gray-600)' }}>{a}</span>
                ))}
              </div>
            </div>

            {/* Price & Book */}
            <div style={{ textAlign: 'right', minWidth: '160px' }}>
              {hotel.discount && (
                <div style={{ fontSize: '12px', color: 'var(--gray-400)', textDecoration: 'line-through' }}>
                  PKR {Math.round(hotel.price * 100 / (100 - hotel.discount)).toLocaleString()}
                </div>
              )}
              <div style={{ fontSize: '26px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {hotel.price.toLocaleString()}</div>
              <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: '16px' }}>per night</div>
              <button
                onClick={() => router.push('/booking')}
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius)',
                  fontWeight: '700',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
