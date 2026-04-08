'use client';
import { useState } from 'react';

interface PaymentData {
  method: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

interface PaymentFormProps {
  onNext: (data: PaymentData) => void;
  onBack: () => void;
}

export default function PaymentForm({ onNext, onBack }: PaymentFormProps) {
  const [method, setMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNext({ method, ...cardData });
    }, 1500);
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
    fontSize: '13px',
    fontWeight: '600' as const,
    color: 'var(--gray-700)',
    marginBottom: '6px',
  };

  const paymentMethods = [
    { id: 'card', label: '💳 Credit/Debit Card' },
    { id: 'easypaisa', label: '📱 EasyPaisa' },
    { id: 'jazzcash', label: '📱 JazzCash' },
    { id: 'bank', label: '🏦 Bank Transfer' },
  ];

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '28px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--gray-800)' }}>Payment Details</h2>
      <p style={{ color: 'var(--gray-500)', fontSize: '14px', marginBottom: '24px' }}>Choose your preferred payment method</p>

      {/* Order Summary */}
      <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: '16px', marginBottom: '24px', border: '1px solid var(--gray-200)' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px', color: 'var(--gray-700)' }}>Order Summary</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--gray-600)' }}>
          <span>Base Fare (1 Passenger)</span>
          <span>PKR 8,500</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--gray-600)' }}>
          <span>Taxes & Fees</span>
          <span>PKR 1,200</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--gray-600)' }}>
          <span>Convenience Fee</span>
          <span>PKR 300</span>
        </div>
        <div style={{ borderTop: '1px solid var(--gray-300)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '16px' }}>
          <span>Total</span>
          <span style={{ color: 'var(--primary)' }}>PKR 10,000</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
        {paymentMethods.map(pm => (
          <button
            key={pm.id}
            type="button"
            onClick={() => setMethod(pm.id)}
            style={{
              padding: '12px',
              border: `2px solid ${method === pm.id ? 'var(--primary)' : 'var(--gray-200)'}`,
              borderRadius: 'var(--radius)',
              background: method === pm.id ? 'var(--primary-light)' : 'white',
              color: method === pm.id ? 'var(--primary)' : 'var(--gray-600)',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {pm.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {method === 'card' && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Card Number</label>
              <input
                style={inputStyle}
                value={cardData.cardNumber}
                onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Cardholder Name</label>
              <input
                style={inputStyle}
                value={cardData.cardName}
                onChange={e => setCardData({ ...cardData, cardName: e.target.value })}
                placeholder="Ahmed Khan"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Expiry Date</label>
                <input
                  style={inputStyle}
                  value={cardData.expiry}
                  onChange={e => setCardData({ ...cardData, expiry: e.target.value })}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div>
                <label style={labelStyle}>CVV</label>
                <input
                  style={inputStyle}
                  value={cardData.cvv}
                  onChange={e => setCardData({ ...cardData, cvv: e.target.value })}
                  placeholder="123"
                  maxLength={3}
                  type="password"
                />
              </div>
            </div>
          </div>
        )}

        {(method === 'easypaisa' || method === 'jazzcash') && (
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Mobile Number</label>
            <input
              style={inputStyle}
              placeholder="+92 300 1234567"
            />
            <p style={{ fontSize: '12px', color: 'var(--gray-500)', marginTop: '8px' }}>You will receive a confirmation code on this number.</p>
          </div>
        )}

        {method === 'bank' && (
          <div style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius)', padding: '16px', marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)', marginBottom: '8px' }}>Bank Transfer Details</p>
            <p style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Bank: HBL Pakistan</p>
            <p style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Account: 1234-5678-9012</p>
            <p style={{ fontSize: '13px', color: 'var(--gray-600)' }}>Title: TravelEase Pvt Ltd</p>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <button
            type="button"
            onClick={onBack}
            style={{
              background: 'transparent',
              color: 'var(--gray-600)',
              padding: '14px 24px',
              borderRadius: 'var(--radius)',
              fontWeight: '600',
              fontSize: '14px',
              border: '2px solid var(--gray-300)',
              cursor: 'pointer',
            }}
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? 'var(--gray-400)' : 'var(--primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 'var(--radius)',
              fontWeight: '700',
              fontSize: '16px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {loading ? (
              <><span className="spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }} /> Processing...</>
            ) : (
              '🔒 Pay PKR 10,000'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
