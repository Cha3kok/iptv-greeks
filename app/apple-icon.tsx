import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        {/* Play triangle */}
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '36px solid transparent',
            borderBottom: '36px solid transparent',
            borderLeft: '62px solid white',
            marginLeft: 10,
          }}
        />
        <div
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 26,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: 1,
          }}
        >
          IPTV Greek
        </div>
      </div>
    ),
    { ...size }
  )
}
