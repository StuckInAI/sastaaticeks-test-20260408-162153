'use client';
import { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'booking' | 'promo' | 'alert';
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: '1', title: 'Booking Confirmed', message: 'Your flight KHI → LHE on 15 Jan has been confirmed. Booking ref: TE-ABC123', time: '2 hours ago', type: 'booking', read: false },
  { id: '2', title: 'Special Deal Alert', message: '30% off on flights to Dubai this weekend. Book now before the offer expires!', time: '5 hours ago', type: 'promo', read: false },
  { id: '3', title: 'Check-in Reminder', message: 'Online check-in is now available for your flight PK-301 tomorrow.', time: '1 day ago', type: 'alert', read: true },
  { id: '4', title: 'Payment Successful', message: 'PKR 10,000 payment received for booking TE-ABC123.', time: '2 days ago', type: 'booking', read: true },
  { id: '5', title: 'Exclusive Member Offer', message: 'As a valued member, enjoy extra 10% off on your next hotel booking.', time: '3 days ago', type: 'promo', read: true },
];

const typeColors: Record<string, { icon: string; color: string; bg: string }> = {
  booking: { icon: '✈️', color: 'var(--primary)', bg: 'var(--primary-light)' },
  promo: { icon: '🏷️', color: 'var(--secondary)', bg: 'var(--secondary-light)' },
  alert: { icon: '🔔', color: 'var(--warning)', bg: 'var(--warning-light)' },
};

export default function DashboardNotifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow)', padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--gray-800)' }}>Notifications</h2>
          {unreadCount > 0 && (
            <span style={{ background: 'var(--danger)', color: 'white', borderRadius: 'var(--radius-full)', padding: '2px 8px', fontSize: '12px', fontWeight: '700' }}>
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            style={{ fontSize: '13px', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}
          >
            Mark all as read
          </button>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.map(notif => {
          const style = typeColors[notif.type];
          return (
            <div
              key={notif.id}
              onClick={() => markRead(notif.id)}
              style={{
                display: 'flex',
                gap: '14px',
                padding: '16px',
                borderRadius: 'var(--radius)',
                background: notif.read ? 'var(--gray-50)' : 'var(--primary-light)',
                border: `1px solid ${notif.read ? 'var(--gray-200)' : 'rgba(0,87,184,0.2)'}`,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: style.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', flexShrink: 0,
              }}>
                {style.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: notif.read ? '600' : '700', color: 'var(--gray-800)', fontSize: '14px' }}>{notif.title}</div>
                  <span style={{ fontSize: '11px', color: 'var(--gray-400)', whiteSpace: 'nowrap', marginLeft: '8px' }}>{notif.time}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray-600)', marginTop: '4px', lineHeight: '1.5' }}>{notif.message}</p>
              </div>
              {!notif.read && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: '6px' }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
