const testimonials = [
  {
    name: 'Ahmed Raza',
    city: 'Karachi',
    rating: 5,
    text: 'TravelEase made booking my flight to Dubai incredibly easy. The prices were unbeatable and the whole process took less than 5 minutes!',
    avatar: '👨',
  },
  {
    name: 'Fatima Malik',
    city: 'Lahore',
    rating: 5,
    text: 'I love how simple and straightforward the booking process is. Got great deals on both my flight and hotel. Highly recommended!',
    avatar: '👩',
  },
  {
    name: 'Ali Hassan',
    city: 'Islamabad',
    rating: 4,
    text: 'The customer support team was very helpful when I needed to change my booking. Quick response and resolved everything smoothly.',
    avatar: '👨‍💼',
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '60px 0', background: 'var(--gray-50)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real experiences from real travelers</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map(t => (
            <div
              key={t.name}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--gray-100)',
              }}
            >
              <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--gray-800)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
