'use client';
import { useState } from 'react';
import FlightSearchResults from '@/components/FlightSearchResults';
import FlightFilters from '@/components/FlightFilters';
import SearchBar from '@/components/SearchBar';

export default function FlightsPage() {
  const [sortBy, setSortBy] = useState<'cheapest' | 'fastest' | 'best'>('cheapest');
  const [filters, setFilters] = useState({
    stops: 'all',
    airlines: [] as string[],
    maxPrice: 100000,
    departureTime: 'all',
  });

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ background: 'var(--primary)', padding: '20px 0' }}>
        <div className="container">
          <SearchBar compact />
        </div>
      </div>
      <div className="container" style={{ padding: '24px 16px' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ width: '280px', flexShrink: 0 }}>
            <FlightFilters filters={filters} setFilters={setFilters} />
          </div>
          <div style={{ flex: 1 }}>
            <FlightSearchResults sortBy={sortBy} setSortBy={setSortBy} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}
