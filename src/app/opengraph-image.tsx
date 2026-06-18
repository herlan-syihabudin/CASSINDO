// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: '#1E5EFF',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        padding: 40,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 20 }}>Cassindo</div>
      <div style={{ fontSize: 56 }}>Solusi Pengadaan</div>
      <div style={{ fontSize: 56, color: '#7ED957' }}>&amp; Supply Chain</div>
      <div style={{ fontSize: 24, marginTop: 30, opacity: 0.8 }}>
        Mitra Terpercaya untuk Industri Indonesia
      </div>
    </div>,
    size
  )
}
