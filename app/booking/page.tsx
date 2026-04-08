'use client';
import { useState } from 'react';
import PassengerForm from '@/components/PassengerForm';
import PaymentForm from '@/components/PaymentForm';
import BookingConfirmation from '@/components/BookingConfirmation';

type Step = 'passengers' | 'payment' | 'confirmation';

export default function BookingPage() {
  const [step, setStep] = useState<Step>('passengers');
  const [bookingData, setBookingData] = useState<Record<string, unknown>>({});

  const steps = [
    { id: 'passengers', label: 'Passenger Info', num: 1 },
    { id: 'payment', label: 'Payment', num: 2 },
    { id: 'confirmation', label: 'Confirmation', num: 3 },
  ];

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '24px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Steps */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)' }}>
            {steps.map((s, i) => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: step === s.id ? 'var(--primary)' : (steps.findIndex(x => x.id === step) > i ? 'var(--success)' : 'var(--gray-200)'),
                    color: step === s.id || steps.findIndex(x => x.id === step) > i ? 'white' : 'var(--gray-500)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '14px'
                  }}>
                    {steps.findIndex(x => x.id === step) > i ? '✓' : s.num}
                  </div>
                  <span style={{ fontWeight: '600', color: step === s.id ? 'var(--primary)' : 'var(--gray-500)', fontSize: '14px' }}>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ flex: 1, height: '2px', background: steps.findIndex(x => x.id === step) > i ? 'var(--success)' : 'var(--gray-200)', margin: '0 16px' }} />
                )}
              </div>
            ))}
          </div>

          {step === 'passengers' && (
            <PassengerForm
              onNext={(data) => {
                setBookingData({ ...bookingData, passengers: data });
                setStep('payment');
              }}
            />
          )}
          {step === 'payment' && (
            <PaymentForm
              onNext={(data) => {
                setBookingData({ ...bookingData, payment: data });
                setStep('confirmation');
              }}
              onBack={() => setStep('passengers')}
            />
          )}
          {step === 'confirmation' && (
            <BookingConfirmation bookingData={bookingData} />
          )}
        </div>
      </div>
    </div>
  );
}
