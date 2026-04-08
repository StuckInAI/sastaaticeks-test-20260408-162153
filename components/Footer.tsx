import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--gray-900)', color: 'white', padding: '60px 0 24px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ background: 'white', borderRadius: 'var(--radius)', padding: '4px 8px', fontWeight: '900', color: 'var(--primary)', fontSize: '16px' }}>✈</div>
              <span style={{ fontWeight: '800', fontSize: '20px' }}>TravelEase</span>
            </div>
            <p style={{ color: 'var(--gray-400)', fontSize: '14px', lineHeight: '1.6' }}>Pakistan&apos;s leading travel booking platform. Find the best deals on flights, hotels, and buses.</p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {['Facebook', 'Twitter', 'Instagram'].map(s => (
                <div key={s} style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px' }}>📱</div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '16px' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/flights', label: 'Flights' },
                { href: '/hotels', label: 'Hotels' },
                { href: '/buses', label: 'Buses' },
                { href: '/deals', label: 'Deals' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: 'var(--gray-400)', fontSize: '14px', textDecoration: 'none' }}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '16px' }}>Support</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Help Center', 'FAQs', 'Contact Us', 'Cancellation Policy', 'Refund Policy'].map(l => (
                <Link key={l} href="/support" style={{ color: 'var(--gray-400)', fontSize: '14px', textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '16px' }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--gray-400)', fontSize: '14px' }}>
              <p>📞 0800-TRAVEL</p>
              <p>✉️ support@travelease.pk</p>
              <p>📍 Karachi, Pakistan</p>
              <p>🕐 24/7 Support</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'var(--gray-500)', fontSize: '14px' }}>© 2024 TravelEase. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ color: 'var(--gray-500)', fontSize: '12px', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
