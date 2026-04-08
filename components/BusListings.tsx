'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Bus {
  id: string;
  operator: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  type: string;
  price: number;
  seats: number;
  amenities: string[];
  rating: number;
}

const buses: Bus[] = [
  {
    id: 'b1',
    operator: 'Daewoo Express',
    from: 'Karachi',
    to: 'Lahore',
    departure: '09:00 PM',
    arrival: '09:00 AM',
    duration: '12h 00m',
    type: 'Business Plus',
    price: 2800,
    seats: 14,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Meal', 'Entertainment'],
    rating: 4.8,
  },
  {
    id: 'b2',
    operator: 'Faisal Movers',
    from: 'Karachi',
    to: 'Lahore',
    departure: '08:00 PM',
    arrival: '10:00 AM',
    duration: '14h 00m',
    type: 'Executive',
    price: 2200,
    seats: 5,
    amenities: ['AC', 'USB Charging', 'Snacks'],
    rating: 4.3,
  },
  {
    id: 'b3',
    operator: 'Skyways',
    from: 'Karachi',
    to: 'Lahore',
    departure: '10:00 PM',
    arrival: '11:30 AM',
    duration: '13h 30m',
    type: 'Standard AC',
    price: 1800,
    seats: 20,
    amenities: ['AC', 'USB Charging'],
    rating: 4.0,
  },
  {
    id: 'b4',
    operator: 'Bilal Travels',
    from: 'Karachi',
    to: 'Lahore',
    departure: '07:00 PM',
    arrival: '08:00 AM',
    duration: '13h 00m',
    type: 'Business',
    price: 2500,
    seats: 8,
    amenities: ['AC', 'WiFi', 'USB Charging', 'Snacks'],
    rating: 4.5,
  },
  {
    id: 'b5',
    operator: 'Kohistan Express',
    from: 'Karachi',
    to: 'Lahore',
    departure: '06:00 PM',
    arrival: '07:00 AM',
    duration: '13h 00m',
    type: 'Economy',
    price: 1500,
    seats: 25,
    amenities: ['AC'],
    rating: 3.8,
  },
];

export default function BusListings() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'rating'>('price');
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'Business Plus', 'Business', 'Executive', 'Standard AC', 'Economy'];

  const filtered = buses
    .filter(b => selectedType === 'all' || b.type === selectedType)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.duration.localeCompare(b.duration);
    });

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--gray-800)' }}>Karachi → Lahore</h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>{filtered.length} buses available</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'var(--gray-600)', fontWeight: '600' }}>Sort by:</span>
          {(['price', 'duration', 'rating'] as const).map(s => (
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
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              border: `2px solid ${selectedType === t ? 'var(--primary)' : 'var(--gray-200)'}`,
              background: selectedType === t ? 'var(--primary-light)' : 'white',
              color: selectedType === t ? 'var(--primary)' : 'var(--gray-600)',
              fontWeight: '600',
              fontSize: '12px',
              cursor: 'pointer',
              textTransform: t === 'all' ? 'capitalize' : 'none',
            }}
          >
            {t === 'all' ? 'All Types' : t}
          </button>
        ))}
      </div>

      {/* Bus Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filtered.map(bus => (
          <div
            key={bus.id}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow)',
              padding: '20px',
              border: '1px solid var(--gray-100)',
              transition: 'box-shadow 0.2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              {/* Left: Operator & Route */}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius)',
                    background: 'var(--primary-light)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px'
                  }}>🚌</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--gray-800)' }}>{bus.operator}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{bus.type}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '14px' }}>⭐</span>
                    <span style={{ fontWeight: '600', fontSize: '14px', color: 'var(--gray-700)' }}>{bus.rating}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--gray-800)' }}>{bus.departure}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{bus.from}</div>
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginBottom: '4px' }}>{bus.duration}</div>
                    <div style={{ height: '2px', background: 'var(--gray-300)', position: 'relative' }}>
                      <span style={{ position: 'absolute', right: '-4px', top: '-6px', fontSize: '12px' }}>▶</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--gray-800)' }}>{bus.arrival}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{bus.to}</div>
                  </div>
                </div>
              </div>

              {/* Right: Price & Book */}
              <div style={{ textAlign: 'right', minWidth: '160px' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {bus.price.toLocaleString()}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '12px' }}>per seat</div>
                <div style={{ fontSize: '12px', color: bus.seats < 10 ? 'var(--danger)' : 'var(--success)', marginBottom: '12px', fontWeight: '600' }}>
                  {bus.seats} seats left
                </div>
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

            {/* Amenities */}
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--gray-100)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {bus.amenities.map(a => (
                <span
                  key={a}
                  style={{
                    padding: '4px 10px',
                    background: 'var(--gray-100)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    color: 'var(--gray-600)',
                    fontWeight: '500',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
