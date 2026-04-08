'use client';
import { useState } from 'react';
import DashboardBookings from '@/components/DashboardBookings';
import DashboardProfile from '@/components/DashboardProfile';
import DashboardNotifications from '@/components/DashboardNotifications';

type Tab = 'bookings' | 'profile' | 'notifications' | 'saved';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('bookings');

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'bookings', label: 'My Bookings', icon: '✈️' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'saved', label: 'Saved Travelers', icon: '⭐' },
  ];

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '24px 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '24px' }}>My Dashboard</h1>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {/* Sidebar */}
          <div style={{ width: '240px', flexShrink: 0 }}>
            <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
              <div style={{ background: 'var(--primary)', padding: '24px', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'white', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>👤</div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '16px' }}>Ahmed Khan</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>ahmed.khan@email.com</div>
              </div>
              <nav style={{ padding: '8px 0' }}>
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '14px 20px',
                      background: activeTab === tab.id ? 'var(--primary-light)' : 'transparent',
                      color: activeTab === tab.id ? 'var(--primary)' : 'var(--gray-600)',
                      borderLeft: activeTab === tab.id ? '3px solid var(--primary)' : '3px solid transparent',
                      fontSize: '14px', fontWeight: activeTab === tab.id ? '600' : '400',
                      display: 'flex', alignItems: 'center', gap: '10px',
                      border: 'none', cursor: 'pointer', transition: 'all 0.2s'
                    }}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            {activeTab === 'bookings' && <DashboardBookings />}
            {activeTab === 'profile' && <DashboardProfile />}
            {activeTab === 'notifications' && <DashboardNotifications />}
            {activeTab === 'saved' && (
              <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Saved Travelers</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Ahmed Khan (Adult)', 'Sara Khan (Adult)', 'Ali Khan (Child)'].map((name, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', background: 'var(--gray-50)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
                        <div>
                          <div style={{ fontWeight: '600', color: 'var(--gray-800)' }}>{name}</div>
                          <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Passport: PK-{100000 + i * 12345}</div>
                        </div>
                      </div>
                      <button style={{ padding: '8px 16px', border: '1px solid var(--gray-300)', borderRadius: 'var(--radius)', background: 'white', color: 'var(--gray-600)', fontSize: '12px', cursor: 'pointer' }}>Edit</button>
                    </div>
                  ))}
                  <button style={{ padding: '12px', border: '2px dashed var(--gray-300)', borderRadius: 'var(--radius)', background: 'transparent', color: 'var(--primary)', fontSize: '14px', fontWeight: '600', cursor: 'pointer', textAlign: 'center' }}>+ Add New Traveler</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
