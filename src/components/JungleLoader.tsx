'use client'

import dynamic from 'next/dynamic'

const JungleExperience = dynamic(
  () => import('@/components/jungle/JungleExperience'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050c17',
        }}
      >
        <span
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
          }}
        >
          entering the jungle…
        </span>
      </div>
    ),
  },
)

export default function JungleLoader() {
  return <JungleExperience />
}
