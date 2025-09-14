import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64ffda',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          borderRadius: 20,
        }}
      >
        RW
      </div>
    ),
    {
      ...size,
    }
  )
}