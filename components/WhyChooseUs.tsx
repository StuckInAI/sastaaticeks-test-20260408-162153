export default function WhyChooseUs() {
  const features = [
    { icon: '💰', title: 'Best Price Guarantee', desc: 'We match any price you find elsewhere. Book with confidence knowing you get the best deal.' },
    { icon: '🔒', title: 'Secure Booking', desc: 'Your payments are protected with bank-level encryption and secure payment gateways.' },
    { icon: '📞', title: '24/7 Support', desc: 'Our customer support team is available round the clock to assist you with any query.' },
    { icon: '⚡', title: 'Instant Confirmation', desc: 'Get your booking confirmation instantly via email and SMS after successful payment.' },
    { icon: '🔄', title: 'Easy Cancellation', desc: 'Flexible cancellation policies. Cancel your booking hassle-free with quick refunds.' },
    { icon: '🏆', title: 'Trusted by Millions', desc: 'Join over 5 million travelers who trust TravelEase for their journey needs.' },
  ];

  return (
    <section style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">Why Choose TravelEase?</h2>
          <p className="section-subtitle">Millions of travelers trust us for their journey</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {features.map(f => (
            <div
              key={f.title}
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--gray-200)',
                background: 'var(--gray-50)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gray-200)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--gray-800)', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
