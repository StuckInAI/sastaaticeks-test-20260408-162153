'use client';
import Link from 'next/link';

interface BookingConfirmationProps {
  bookingData: Record<string, unknown>;
}

export default function BookingConfirmation({ bookingData }: BookingConfirmationProps) {
  const bookingRef = 'TE' + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Success Card */}
      <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '40px 28px', marginBottom: '20px' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'var(--success-light)', margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '40px'
        }}>
          ✅
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '8px' }}>Booking Confirmed!</h2>
        <p style={{ color: 'var(--gray-500)', fontSize: '14px', marginBottom: '20px' }}>Your booking has been successfully confirmed. A confirmation email has been sent.</p>

        <div style={{
          background: 'var(--gray-50)', borderRadius: 'var(--radius)',
          padding: '16px', display: 'inline-block', marginBottom: '24px',
          border: '2px dashed var(--gray-300)'
        }}>
          <div style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>Booking Reference</div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '2px' }}>{bookingRef}</div>
        </div>

        {/* Flight Details */}
        <div style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius)', padding: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', marginBottom: '16px' }}>✈️ Flight Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Route', value: 'KHI → LHE' },
              { label: 'Flight', value: 'PK-301' },
              { label: 'Date', value: '15 Jan 2025' },
              { label: 'Departure', value: '08:00 AM' },
              { label: 'Arrival', value: '09:10 AM' },
              { label: 'Class', value: 'Economy' },
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: '11px', color: 'var(--gray-500)', marginBottom: '2px' }}>{item.label}</div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gray-800)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', padding: '16px', marginBottom: '20px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--gray-700)', marginBottom: '12px' }}>💳 Payment Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Amount Paid</span>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--success)' }}>PKR 10,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Payment Status</span>
            <span className="badge badge-success">Confirmed</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: '12px 24px',
              border: '2px solid var(--primary)',
              borderRadius: 'var(--radius)',
              background: 'transparent',
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            🖨️ Print Ticket
          </button>
          <button
            style={{
              padding: '12px 24px',
              border: '2px solid var(--gray-300)',
              borderRadius: 'var(--radius)',
              background: 'transparent',
              color: 'var(--gray-600)',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            📧 Email Ticket
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <Link
          href="/dashboard"
          style={{
            background: 'var(--primary)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: 'var(--radius)',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'none',
          }}
        >
          View My Bookings
        </Link>
        <Link
          href="/"
          style={{
            background: 'white',
            color: 'var(--gray-700)',
            padding: '14px 28px',
            borderRadius: 'var(--radius)',
            fontWeight: '600',
            fontSize: '14px',
            textDecoration: 'none',
            border: '2px solid var(--gray-300)',
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
