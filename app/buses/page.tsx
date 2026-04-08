'use client';
import BusListings from '@/components/BusListings';
import SearchBar from '@/components/SearchBar';

export default function BusesPage() {
  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ background: 'var(--primary)', padding: '20px 0' }}>
        <div className="container">
          <SearchBar compact type="bus" />
        </div>
      </div>
      <div className="container" style={{ padding: '24px 16px' }}>
        <BusListings />
      </div>
    </div>
  );
}
