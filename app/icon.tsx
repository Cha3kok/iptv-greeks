import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#059669',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Play triangle */}
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderLeft: '13px solid white',
            marginLeft: 2,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
