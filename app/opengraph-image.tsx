import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background pattern dots */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* Logo icon */}
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 22,
            background: '#059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 28,
            boxShadow: '0 0 60px rgba(5,150,105,0.5)',
          }}
        >
          <div style={{
            width: 0, height: 0,
            borderTop: '22px solid transparent',
            borderBottom: '22px solid transparent',
            borderLeft: '38px solid white',
            marginLeft: 6,
          }} />
        </div>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 64, fontWeight: 900, color: '#34d399', letterSpacing: -1 }}>IPTV</span>
          <span style={{ fontSize: 64, fontWeight: 300, color: 'white', letterSpacing: -1 }}>Greek</span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: 28, color: 'rgba(255,255,255,0.8)', margin: 0, marginBottom: 32 }}>
          10.000+ Ελληνικά & Διεθνή Κανάλια σε HD & 4K
        </p>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['✅ Δωρεάν Δοκιμή 24ω', '⚡ Άμεση Ενεργοποίηση', '🛡️ Εγγύηση Επιστροφής'].map(badge => (
            <div key={badge} style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 100,
              padding: '10px 20px',
              color: 'white',
              fontSize: 18,
            }}>
              {badge}
            </div>
          ))}
        </div>

        {/* Domain */}
        <p style={{ position: 'absolute', bottom: 30, color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>
          iptvgreeks.gr
        </p>
      </div>
    ),
    { ...size }
  )
}
