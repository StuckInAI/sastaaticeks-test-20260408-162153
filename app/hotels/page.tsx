'use client';
import HotelListings from '@/components/HotelListings';
import SearchBar from '@/components/SearchBar';

export default function HotelsPage() {
  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      <div style={{ background: 'var(--primary)', padding: '20px 0' }}>
        <div className="container">
          <SearchBar compact type="hotel" />
        </div>
      </div>
      <div className="container" style={{ padding: '24px 16px' }}>
        <HotelListings />
      </div>
    </div>
  );
}
