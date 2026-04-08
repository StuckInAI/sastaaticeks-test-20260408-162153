'use client';
import { useRouter } from 'next/navigation';

interface FlightDetailProps {
  flightId: string;
  onBack: () => void;
}

const flightData: Record<string, {
  id: string;
  airline: string;
  flightNo: string;
  from: string;
  fromCity: string;
  to: string;
  toCity: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: number;
  price: number;
  aircraft: string;
  class: string;
  baggage: string;
  meal: string;
  refundable: boolean;
}> = {
  '1': {
    id: '1',
    airline: 'PIA',
    flightNo: 'PK-301',
    from: 'KHI',
    fromCity: 'Karachi',
    to: 'LHE',
    toCity: 'Lahore',
    departure: '08:00',
    arrival: '09:10',
    duration: '1h 10m',
    stops: 0,
    price: 8500,
    aircraft: 'Boeing 737',
    class: 'Economy',
    baggage: '20 KG',
    meal: 'Included',
    refundable: true,
  },
  '2': {
    id: '2',
    airline: 'Serene Air',
    flightNo: 'ER-501',
    from: 'KHI',
    fromCity: 'Karachi',
    to: 'LHE',
    toCity: 'Lahore',
    departure: '10:30',
    arrival: '11:45',
    duration: '1h 15m',
    stops: 0,
    price: 9200,
    aircraft: 'Boeing 737',
    class: 'Economy',
    baggage: '20 KG',
    meal: 'Not Included',
    refundable: false,
  },
};

export default function FlightDetail({ flightId, onBack }: FlightDetailProps) {
  const router = useRouter();
  const flight = flightData[flightId] || flightData['1'];

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'none', border: 'none', color: 'var(--gray-600)',
          fontSize: '14px', fontWeight: '600', cursor: 'pointer',
          marginBottom: '20px', padding: '8px 0',
        }}
      >
        ← Back to Results
      </button>

      {/* Main Card */}
      <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', marginBottom: '16px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ background: 'var(--primary)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '32px' }}>✈️</div>
            <div>
              <div style={{ color: 'white', fontWeight: '800', fontSize: '20px' }}>{flight.airline}</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>{flight.flightNo} · {flight.aircraft}</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Economy Class</div>
            <div style={{ color: '#ffd700', fontWeight: '800', fontSize: '28px' }}>PKR {flight.price.toLocaleString()}</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>per person</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          {/* Route */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px', padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--gray-800)' }}>{flight.departure}</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>{flight.from}</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{flight.fromCity} Airport</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '8px' }}>{flight.duration}</div>
              <div style={{ height: '2px', background: 'var(--gray-300)', margin: '0 10px', position: 'relative' }}>
                <span style={{ position: 'absolute', right: 0, top: '-10px', fontSize: '18px' }}>✈</span>
              </div>
              <div style={{ fontSize: '12px', color: flight.stops === 0 ? 'var(--success)' : 'var(--warning)', fontWeight: '700', marginTop: '8px' }}>
                {flight.stops === 0 ? '✓ Non-stop' : `${flight.stops} stop`}
              </div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: 'var(--gray-800)' }}>{flight.arrival}</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>{flight.to}</div>
              <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{flight.toCity} Airport</div>
            </div>
          </div>

          {/* Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {[
              { icon: '🧳', label: 'Baggage', value: flight.baggage },
              { icon: '🍽️', label: 'Meal', value: flight.meal },
              { icon: '💺', label: 'Class', value: flight.class },
              { icon: '🔄', label: 'Refundable', value: flight.refundable ? 'Yes' : 'No' },
            ].map(item => (
              <div key={item.label} style={{ padding: '16px', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'var(--gray-50)' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--gray-800)' }}>{item.value}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push('/booking')}
            style={{
              width: '100%',
              background: 'var(--primary)',
              color: 'white',
              padding: '16px',
              borderRadius: 'var(--radius)',
              fontWeight: '700',
              fontSize: '18px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,87,184,0.3)',
            }}
          >
            Book This Flight — PKR {flight.price.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}
