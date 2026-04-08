'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How do I cancel my booking?', a: 'You can cancel your booking from your dashboard under My Bookings. Select the booking and click Cancel. Refunds are processed within 5-7 business days.' },
  { q: 'What is the baggage allowance?', a: 'Baggage allowance varies by airline and ticket class. Economy class typically allows 20kg checked baggage. Please check your ticket for specific details.' },
  { q: 'Can I change my flight date?', a: 'Yes, date changes are possible subject to availability and fare difference. A change fee may apply depending on the fare type.' },
  { q: 'How do I get my e-ticket?', a: 'Your e-ticket is sent to your registered email address immediately after successful booking. You can also download it from your dashboard.' },
  { q: 'What payment methods are accepted?', a: 'We accept all major credit/debit cards, EasyPaisa, JazzCash, and bank transfers.' },
  { q: 'Is it safe to pay online?', a: 'Yes, all transactions are secured with 256-bit SSL encryption. We are PCI DSS compliant for maximum security.' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '2px solid var(--gray-200)',
    borderRadius: 'var(--radius)',
    fontSize: '14px',
    background: 'white',
  };

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0057b8, #003d82)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '40px', fontWeight: '900', color: 'white', marginBottom: '12px' }}>📞 Support Center</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)' }}>We&apos;re here to help you 24/7. Find answers or contact our team.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 16px' }}>
        {/* Quick Contact Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {[
            { icon: '📞', title: 'Call Us', desc: '0800-TRAVEL', sub: 'Available 24/7' },
            { icon: '✉️', title: 'Email Us', desc: 'support@travelease.pk', sub: 'Reply within 2 hours' },
            { icon: '💬', title: 'Live Chat', desc: 'Chat with an agent', sub: 'Average wait: 2 min' },
            { icon: '📍', title: 'Visit Us', desc: 'Karachi, Pakistan', sub: 'Mon-Sat 9AM-6PM' },
          ].map(card => (
            <div
              key={card.title}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
                cursor: 'pointer',
                border: '1px solid var(--gray-100)',
                transition: 'box-shadow 0.2s',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>{card.icon}</div>
              <div style={{ fontWeight: '700', color: 'var(--gray-800)', marginBottom: '4px' }}>{card.title}</div>
              <div style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>{card.desc}</div>
              <div style={{ fontSize: '12px', color: 'var(--gray-400)' }}>{card.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'flex-start' }}>
          {/* FAQ Section */}
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '20px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--gray-200)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '16px 20px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: '600',
                      fontSize: '14px',
                      color: 'var(--gray-800)',
                    }}
                  >
                    {faq.q}
                    <span style={{ color: 'var(--primary)', fontSize: '18px', flexShrink: 0, marginLeft: '8px' }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 20px 16px', fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '28px', boxShadow: 'var(--shadow)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '20px' }}>Send Us a Message</h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>We&apos;ll get back to you within 2 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px', padding: '10px 24px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius)', fontWeight: '600', cursor: 'pointer' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' as const }}>Name</label>
                    <input
                      required
                      style={inputStyle}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ahmed Khan"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' as const }}>Email</label>
                    <input
                      required
                      type="email"
                      style={inputStyle}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' as const }}>Subject</label>
                  <input
                    required
                    style={inputStyle}
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' as const }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue or question..."
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: 'var(--radius)',
                    fontWeight: '700',
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
