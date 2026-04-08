'use client';
import { useState } from 'react';

interface Booking {
  id: string;
  type: string;
  route: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  amount: number;
  ref: string;
  details: string;
}

const bookings: Booking[] = [
  { id: '1', type: '✈️ Flight', route: 'KHI → LHE', date: '15 Jan 2025', status: 'confirmed', amount: 10000, ref: 'TE-ABC123', details: 'PK-301 · Economy · 1 Passenger' },
  { id: '2', type: '🏨 Hotel', route: 'Pearl Continental, Karachi', date: '20 Jan 2025', status: 'confirmed', amount: 18000, ref: 'TE-DEF456', details: '2 Nights · 1 Room · Deluxe' },
  { id: '3', type: '✈️ Flight', route: 'LHE → KHI', date: '25 Jan 2025', status: 'pending', amount: 9200, ref: 'TE-GHI789', details: 'ER-501 · Economy · 1 Passenger' },
  { id: '4', type: '🚌 Bus', route: 'KHI → ISB', date: '10 Feb 2025', status: 'cancelled', amount: 2800, ref: 'TE-JKL012', details: 'Daewoo Express · Business Plus' },
];

const statusColors: Record<string, { bg: string; color: string }> = {
  confirmed: { bg: 'var(--success-light)', color: 'var(--success)' },
  pending: { bg: 'var(--warning-light)', color: 'var(--warning)' },
  cancelled: { bg: 'var(--danger-light)', color: 'var(--danger)' },
};

export default function DashboardBookings() {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'pending' | 'cancelled'>('all');

  const filtered = bookings.filter(b => filter === 'all' || b.status === filter);

  return (
    <div>
      <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '24px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--gray-800)' }}>My Bookings</h2>
          <div style={{ display: 'flex', gap: '6px' }}>
            {(['all', 'confirmed', 'pending', 'cancelled'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: `2px solid ${filter === f ? 'var(--primary)' : 'var(--gray-200)'}`,
                  background: filter === f ? 'var(--primary)' : 'white',
                  color: filter === f ? 'white' : 'var(--gray-600)',
                  fontWeight: '600',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map(booking => (
            <div
              key={booking.id}
              style={{
                border: '1px solid var(--gray-200)',
                borderRadius: 'var(--radius)',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'var(--gray-50)',
              }}
            >
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '20px' }}>{booking.type.split(' ')[0]}</span>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--gray-800)', fontSize: '15px' }}>{booking.route}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{booking.details}</div>
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>
                  📅 {booking.date} · Ref: <strong>{booking.ref}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-800)' }}>PKR {booking.amount.toLocaleString()}</div>
                </div>
                <span style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: statusColors[booking.status].bg,
                  color: statusColors[booking.status].color,
                  textTransform: 'capitalize',
                }}>
                  {booking.status}
                </span>
                {booking.status !== 'cancelled' && (
                  <button style={{ padding: '8px 14px', border: '1px solid var(--gray-300)', borderRadius: 'var(--radius)', background: 'white', color: 'var(--gray-600)', fontSize: '12px', cursor: 'pointer', fontWeight: '600' }}>
                    Manage
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
