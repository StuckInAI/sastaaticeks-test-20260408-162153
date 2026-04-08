'use client';
import { useState } from 'react';

export default function DashboardProfile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Ahmed',
    lastName: 'Khan',
    email: 'ahmed.khan@email.com',
    phone: '+92 300 1234567',
    dob: '1990-05-15',
    nationality: 'Pakistani',
    passport: 'AB1234567',
  });

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius)',
    fontSize: '14px',
    background: editing ? 'white' : 'var(--gray-50)',
    color: 'var(--gray-800)',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600' as const,
    color: 'var(--gray-500)',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '28px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--gray-800)' }}>Profile Settings</h2>
        <button
          onClick={() => setEditing(!editing)}
          style={{
            padding: '10px 20px',
            border: `2px solid ${editing ? 'var(--success)' : 'var(--primary)'}`,
            borderRadius: 'var(--radius)',
            background: editing ? 'var(--success)' : 'transparent',
            color: editing ? 'white' : 'var(--primary)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          {editing ? '✓ Save Changes' : '✏️ Edit Profile'}
        </button>
      </div>

      {/* Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', padding: '20px', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>👤</div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--gray-800)' }}>{profile.firstName} {profile.lastName}</div>
          <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{profile.email}</div>
          <div style={{ fontSize: '12px', color: 'var(--success)', marginTop: '4px', fontWeight: '600' }}>✓ Verified Account</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={labelStyle}>First Name</label>
          <input
            style={inputStyle}
            value={profile.firstName}
            onChange={e => editing && setProfile({ ...profile, firstName: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name</label>
          <input
            style={inputStyle}
            value={profile.lastName}
            onChange={e => editing && setProfile({ ...profile, lastName: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            value={profile.email}
            onChange={e => editing && setProfile({ ...profile, email: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            style={inputStyle}
            value={profile.phone}
            onChange={e => editing && setProfile({ ...profile, phone: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div>
          <label style={labelStyle}>Date of Birth</label>
          <input
            type="date"
            style={inputStyle}
            value={profile.dob}
            onChange={e => editing && setProfile({ ...profile, dob: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div>
          <label style={labelStyle}>Nationality</label>
          <input
            style={inputStyle}
            value={profile.nationality}
            onChange={e => editing && setProfile({ ...profile, nationality: e.target.value })}
            readOnly={!editing}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Passport / CNIC</label>
          <input
            style={inputStyle}
            value={profile.passport}
            onChange={e => editing && setProfile({ ...profile, passport: e.target.value })}
            readOnly={!editing}
          />
        </div>
      </div>
    </div>
  );
}
