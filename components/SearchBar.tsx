'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  compact?: boolean;
  type?: 'flight' | 'hotel' | 'bus';
}

export default function SearchBar({ compact = false, type = 'flight' }: SearchBarProps) {
  const router = useRouter();
  const [activeType, setActiveType] = useState<'flight' | 'hotel' | 'bus'>(type);
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [from, setFrom] = useState('Karachi (KHI)');
  const [to, setTo] = useState('Lahore (LHE)');
  const [departDate, setDepartDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);

  const searchTypes = [
    { id: 'flight' as const, label: '✈️ Flights' },
    { id: 'hotel' as const, label: '🏨 Hotels' },
    { id: 'bus' as const, label: '🚌 Buses' },
  ];

  const handleSearch = () => {
    if (activeType === 'flight') router.push('/flights');
    else if (activeType === 'hotel') router.push('/hotels');
    else router.push('/buses');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius)',
    fontSize: '14px',
    background: 'white',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600' as const,
    color: compact ? 'rgba(255,255,255,0.8)' : 'var(--gray-500)',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  return (
    <div style={{
      background: compact ? 'transparent' : 'white',
      borderRadius: compact ? 0 : 'var(--radius-lg)',
      padding: compact ? '0' : '32px',
      boxShadow: compact ? 'none' : 'var(--shadow-xl)',
    }}>
      {!compact && (
        <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', background: 'var(--gray-100)', padding: '4px', borderRadius: 'var(--radius)' }}>
          {searchTypes.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveType(t.id)}
              style={{
                flex: 1, padding: '10px', borderRadius: 'var(--radius)',
                border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '14px',
                background: activeType === t.id ? 'white' : 'transparent',
                color: activeType === t.id ? 'var(--primary)' : 'var(--gray-500)',
                boxShadow: activeType === t.id ? 'var(--shadow)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {activeType === 'flight' && (
        <div>
          {!compact && (
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              {(['one-way', 'round-trip'] as const).map(t => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                  <input type="radio" name="tripType" checked={tripType === t} onChange={() => setTripType(t)} />
                  {t === 'one-way' ? 'One Way' : 'Round Trip'}
                </label>
              ))}
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: compact ? 'repeat(auto-fit, minmax(160px, 1fr))' : '1fr 1fr 1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
            <div>
              <label style={labelStyle}>From</label>
              <input value={from} onChange={e => setFrom(e.target.value)} style={inputStyle} placeholder="Origin city" />
            </div>
            <div>
              <label style={labelStyle}>To</label>
              <input value={to} onChange={e => setTo(e.target.value)} style={inputStyle} placeholder="Destination city" />
            </div>
            <div>
              <label style={labelStyle}>Depart</label>
              <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Passengers</label>
              <select value={passengers} onChange={e => setPassengers(Number(e.target.value))} style={inputStyle}>
                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
            <button
              onClick={handleSearch}
              style={{
                background: 'var(--secondary)', color: 'white',
                padding: '12px 28px', borderRadius: 'var(--radius)',
                fontWeight: '700', fontSize: '16px', border: 'none',
                cursor: 'pointer', whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(255,107,0,0.4)',
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {activeType === 'hotel' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', alignItems: 'end' }}>
          <div>
            <label style={labelStyle}>City</label>
            <input defaultValue="Karachi" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Check-in</label>
            <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Check-out</label>
            <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Rooms</label>
            <select value={rooms} onChange={e => setRooms(Number(e.target.value))} style={inputStyle}>
              {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <button onClick={handleSearch} style={{ background: 'var(--secondary)', color: 'white', padding: '12px 24px', borderRadius: 'var(--radius)', fontWeight: '700', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Search</button>
        </div>
      )}

      {activeType === 'bus' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', alignItems: 'end' }}>
          <div>
            <label style={labelStyle}>From</label>
            <input defaultValue="Karachi" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>To</label>
            <input defaultValue="Lahore" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Date</label>
            <input type="date" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Seats</label>
            <select style={inputStyle}>
              {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Seat{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
          <button onClick={handleSearch} style={{ background: 'var(--secondary)', color: 'white', padding: '12px 24px', borderRadius: 'var(--radius)', fontWeight: '700', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Search</button>
        </div>
      )}
    </div>
  );
}
