'use client';
import { useState } from 'react';

interface PassengerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  passport: string;
  nationality: string;
}

interface PassengerFormProps {
  onNext: (data: PassengerData) => void;
}

export default function PassengerForm({ onNext }: PassengerFormProps) {
  const [data, setData] = useState<PassengerData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    passport: '',
    nationality: 'Pakistani',
  });

  const [errors, setErrors] = useState<Partial<PassengerData>>({});

  const validate = () => {
    const newErrors: Partial<PassengerData> = {};
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.lastName) newErrors.lastName = 'Last name is required';
    if (!data.email || !/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) newErrors.email = 'Valid email is required';
    if (!data.phone) newErrors.phone = 'Phone is required';
    if (!data.passport) newErrors.passport = 'Passport/CNIC is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext(data);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius)',
    fontSize: '14px',
    background: 'white',
  };

  const errorStyle = { color: 'var(--danger)', fontSize: '12px', marginTop: '4px' };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600' as const,
    color: 'var(--gray-700)',
    marginBottom: '6px',
  };

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '28px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--gray-800)' }}>Passenger Information</h2>
      <p style={{ color: 'var(--gray-500)', fontSize: '14px', marginBottom: '24px' }}>Please enter details as per your passport/CNIC</p>

      <div style={{ background: 'var(--primary-light)', borderRadius: 'var(--radius)', padding: '16px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <span style={{ fontSize: '20px' }}>✈️</span>
        <div>
          <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '14px' }}>Karachi (KHI) → Lahore (LHE)</div>
          <div style={{ fontSize: '12px', color: 'var(--gray-600)' }}>PK-301 · Economy · 1 Passenger</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>First Name *</label>
            <input
              style={{ ...inputStyle, borderColor: errors.firstName ? 'var(--danger)' : 'var(--gray-200)' }}
              value={data.firstName}
              onChange={e => setData({ ...data, firstName: e.target.value })}
              placeholder="Ahmed"
            />
            {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
          </div>
          <div>
            <label style={labelStyle}>Last Name *</label>
            <input
              style={{ ...inputStyle, borderColor: errors.lastName ? 'var(--danger)' : 'var(--gray-200)' }}
              value={data.lastName}
              onChange={e => setData({ ...data, lastName: e.target.value })}
              placeholder="Khan"
            />
            {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input
              type="email"
              style={{ ...inputStyle, borderColor: errors.email ? 'var(--danger)' : 'var(--gray-200)' }}
              value={data.email}
              onChange={e => setData({ ...data, email: e.target.value })}
              placeholder="ahmed@example.com"
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}
          </div>
          <div>
            <label style={labelStyle}>Phone Number *</label>
            <input
              style={{ ...inputStyle, borderColor: errors.phone ? 'var(--danger)' : 'var(--gray-200)' }}
              value={data.phone}
              onChange={e => setData({ ...data, phone: e.target.value })}
              placeholder="+92 300 1234567"
            />
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={labelStyle}>Date of Birth</label>
            <input
              type="date"
              style={inputStyle}
              value={data.dob}
              onChange={e => setData({ ...data, dob: e.target.value })}
            />
          </div>
          <div>
            <label style={labelStyle}>Nationality</label>
            <select
              style={inputStyle}
              value={data.nationality}
              onChange={e => setData({ ...data, nationality: e.target.value })}
            >
              {['Pakistani', 'Indian', 'British', 'American', 'Other'].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>Passport / CNIC Number *</label>
          <input
            style={{ ...inputStyle, borderColor: errors.passport ? 'var(--danger)' : 'var(--gray-200)' }}
            value={data.passport}
            onChange={e => setData({ ...data, passport: e.target.value })}
            placeholder="AB1234567 or 42101-1234567-1"
          />
          {errors.passport && <p style={errorStyle}>{errors.passport}</p>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="submit"
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 'var(--radius)',
              fontWeight: '700',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Continue to Payment →
          </button>
        </div>
      </form>
    </div>
  );
}
