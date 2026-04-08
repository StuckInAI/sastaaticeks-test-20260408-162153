'use client';
import { useParams, useRouter } from 'next/navigation';
import FlightDetail from '@/components/FlightDetail';

export default function FlightDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '24px 0' }}>
      <div className="container">
        <FlightDetail flightId={id} onBack={() => router.back()} />
      </div>
    </div>
  );
}
