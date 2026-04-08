'use client';

interface Filters {
  stops: string;
  airlines: string[];
  maxPrice: number;
  departureTime: string;
}

interface FlightFiltersProps {
  filters: Filters;
  setFilters: (f: Filters) => void;
}

const airlines = ['PIA', 'Serene Air', 'Airblue'];

export default function FlightFilters({ filters, setFilters }: FlightFiltersProps) {
  const toggleAirline = (airline: string) => {
    const current = filters.airlines;
    const updated = current.includes(airline)
      ? current.filter(a => a !== airline)
      : [...current, airline];
    setFilters({ ...filters, airlines: updated });
  };

  const sectionStyle = { marginBottom: '24px' };
  const titleStyle = { fontSize: '14px', fontWeight: '700', color: 'var(--gray-700)', marginBottom: '12px' };

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '20px', boxShadow: 'var(--shadow)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--gray-800)' }}>Filters</h3>
        <button
          onClick={() => setFilters({ stops: 'all', airlines: [], maxPrice: 100000, departureTime: 'all' })}
          style={{ fontSize: '12px', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}
        >
          Reset All
        </button>
      </div>

      {/* Stops */}
      <div style={sectionStyle}>
        <p style={titleStyle}>Stops</p>
        {[{ value: 'all', label: 'All' }, { value: 'nonstop', label: 'Non-stop' }, { value: '1stop', label: '1 Stop' }].map(opt => (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--gray-600)' }}>
            <input
              type="radio"
              name="stops"
              checked={filters.stops === opt.value}
              onChange={() => setFilters({ ...filters, stops: opt.value })}
            />
            {opt.label}
          </label>
        ))}
      </div>

      {/* Airlines */}
      <div style={sectionStyle}>
        <p style={titleStyle}>Airlines</p>
        {airlines.map(a => (
          <label key={a} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--gray-600)' }}>
            <input
              type="checkbox"
              checked={filters.airlines.includes(a)}
              onChange={() => toggleAirline(a)}
            />
            {a}
          </label>
        ))}
      </div>

      {/* Max Price */}
      <div style={sectionStyle}>
        <p style={titleStyle}>Max Price: PKR {filters.maxPrice.toLocaleString()}</p>
        <input
          type="range"
          min="5000"
          max="100000"
          step="1000"
          value={filters.maxPrice}
          onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--gray-400)', marginTop: '4px' }}>
          <span>PKR 5,000</span>
          <span>PKR 1,00,000</span>
        </div>
      </div>

      {/* Departure Time */}
      <div style={sectionStyle}>
        <p style={titleStyle}>Departure Time</p>
        {[
          { value: 'all', label: 'Any Time' },
          { value: 'morning', label: '🌅 Morning (6AM-12PM)' },
          { value: 'afternoon', label: '☀️ Afternoon (12PM-6PM)' },
          { value: 'evening', label: '🌙 Evening (6PM-12AM)' },
        ].map(opt => (
          <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer', fontSize: '13px', color: 'var(--gray-600)' }}>
            <input
              type="radio"
              name="depTime"
              checked={filters.departureTime === opt.value}
              onChange={() => setFilters({ ...filters, departureTime: opt.value })}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
