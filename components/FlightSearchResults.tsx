'use client';
import { useRouter } from 'next/navigation';

interface Filters {
  stops: string;
  airlines: string[];
  maxPrice: number;
  departureTime: string;
}

interface FlightSearchResultsProps {
  sortBy: 'cheapest' | 'fastest' | 'best';
  setSortBy: (s: 'cheapest' | 'fastest' | 'best') => void;
  filters: Filters;
}

const flights = [
  { id: '1', airline: 'PIA', from: 'KHI', to: 'LHE', departure: '08:00', arrival: '09:10', duration: '1h 10m', stops: 0, price: 8500, aircraft: 'Boeing 737' },
  { id: '2', airline: 'Serene Air', from: 'KHI', to: 'LHE', departure: '10:30', arrival: '11:45', duration: '1h 15m', stops: 0, price: 9200, aircraft: 'Boeing 737' },
  { id: '3', airline: 'Airblue', from: 'KHI', to: 'LHE', departure: '13:00', arrival: '14:20', duration: '1h 20m', stops: 0, price: 8800, aircraft: 'Airbus A320' },
  { id: '4', airline: 'PIA', from: 'KHI', to: 'LHE', departure: '06:00', arrival: '09:30', duration: '3h 30m', stops: 1, price: 7200, aircraft: 'ATR 72' },
  { id: '5', airline: 'Serene Air', from: 'KHI', to: 'LHE', departure: '16:00', arrival: '17:15', duration: '1h 15m', stops: 0, price: 9800, aircraft: 'Boeing 737' },
  { id: '6', airline: 'Airblue', from: 'KHI', to: 'LHE', departure: '20:00', arrival: '21:15', duration: '1h 15m', stops: 0, price: 10200, aircraft: 'Airbus A320' },
];

export default function FlightSearchResults({ sortBy, setSortBy, filters }: FlightSearchResultsProps) {
  const router = useRouter();

  const filtered = flights
    .filter(f => {
      if (filters.stops !== 'all') {
        if (filters.stops === 'nonstop' && f.stops !== 0) return false;
        if (filters.stops === '1stop' && f.stops !== 1) return false;
      }
      if (f.price > filters.maxPrice) return false;
      if (filters.airlines.length > 0 && !filters.airlines.includes(f.airline)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'cheapest') return a.price - b.price;
      if (sortBy === 'fastest') return a.duration.localeCompare(b.duration);
      return a.price - b.price;
    });

  return (
    <div>
      {/* Sort Bar */}
      <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '16px', boxShadow: 'var(--shadow)', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '14px', color: 'var(--gray-600)', fontWeight: '600', marginRight: '8px' }}>
          {filtered.length} flights found
        </span>
        {(['cheapest', 'fastest', 'best'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSortBy(s)}
            style={{
              padding: '8px 18px',
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

      {/* Flight Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filtered.map(flight => (
          <div
            key={flight.id}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--gray-100)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {/* Airline */}
            <div style={{ minWidth: '100px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: 'var(--radius)',
                background: 'var(--primary-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', marginBottom: '6px'
              }}>✈️</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--gray-700)' }}>{flight.airline}</div>
              <div style={{ fontSize: '11px', color: 'var(--gray-400)' }}>{flight.aircraft}</div>
            </div>

            {/* Route */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '16px', minWidth: '220px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--gray-800)' }}>{flight.departure}</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{flight.from}</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginBottom: '4px' }}>{flight.duration}</div>
                <div style={{ height: '2px', background: 'var(--gray-300)', position: 'relative' }}>
                  <span style={{ position: 'absolute', right: 0, top: '-8px', fontSize: '14px' }}>✈</span>
                </div>
                <div style={{ fontSize: '11px', color: flight.stops === 0 ? 'var(--success)' : 'var(--warning)', marginTop: '4px', fontWeight: '600' }}>
                  {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop`}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--gray-800)' }}>{flight.arrival}</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{flight.to}</div>
              </div>
            </div>

            {/* Price & Book */}
            <div style={{ textAlign: 'right', minWidth: '160px' }}>
              <div style={{ fontSize: '26px', fontWeight: '800', color: 'var(--secondary)' }}>PKR {flight.price.toLocaleString()}</div>
              <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: '12px' }}>per person</div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => router.push(`/flights/${flight.id}`)}
                  style={{
                    padding: '10px 14px',
                    border: '2px solid var(--primary)',
                    borderRadius: 'var(--radius)',
                    background: 'transparent',
                    color: 'var(--primary)',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Details
                </button>
                <button
                  onClick={() => router.push('/booking')}
                  style={{
                    padding: '10px 16px',
                    border: 'none',
                    borderRadius: 'var(--radius)',
                    background: 'var(--primary)',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '48px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✈️</div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-700)', marginBottom: '8px' }}>No flights found</h3>
            <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>Try adjusting your filters or search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
