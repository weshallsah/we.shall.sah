export type TimeOfDay = 'day' | 'dusk' | 'night'

export interface LightingPreset {
  timeOfDay: TimeOfDay
  ambientColor: string
  ambientIntensity: number
  sunColor: string
  sunIntensity: number
  sunPosition: [number, number, number]
  fogColor: string
  fogNear: number
  fogFar: number
  leafColor: string
  trunkColor: string
  groundColor: string
  particlesOn: boolean
  bioluminescence: boolean
  // UI accent color for HTML overlays
  accent: string
  accentDim: string
  skyBg: string
}

const presets: Record<TimeOfDay, LightingPreset> = {
  day: {
    timeOfDay: 'day',
    ambientColor: '#5a9e72',
    ambientIntensity: 0.9,
    sunColor: '#fff5cc',
    sunIntensity: 2.2,
    sunPosition: [8, 18, 5],
    fogColor: '#6bba8e',
    fogNear: 35,
    fogFar: 95,
    leafColor: '#2d6a4f',
    trunkColor: '#6b4226',
    groundColor: '#1a4c2a',
    particlesOn: false,
    bioluminescence: false,
    accent: '#52b788',
    accentDim: '#2d6a4f',
    skyBg: '#0d2b1e',
  },
  dusk: {
    timeOfDay: 'dusk',
    ambientColor: '#8b5a2b',
    ambientIntensity: 0.5,
    sunColor: '#ff8c42',
    sunIntensity: 1.3,
    sunPosition: [20, 4, 0],
    fogColor: '#6b3d2e',
    fogNear: 22,
    fogFar: 65,
    leafColor: '#5c4a2a',
    trunkColor: '#4a2e1a',
    groundColor: '#2c1a10',
    particlesOn: true,
    bioluminescence: false,
    accent: '#e76f51',
    accentDim: '#8b3a2a',
    skyBg: '#1e0d08',
  },
  night: {
    timeOfDay: 'night',
    ambientColor: '#0e1f3d',
    ambientIntensity: 0.25,
    sunColor: '#c4d4e8',
    sunIntensity: 0.5,
    sunPosition: [-5, 14, 8],
    fogColor: '#060d1a',
    fogNear: 16,
    fogFar: 52,
    leafColor: '#1b4332',
    trunkColor: '#2c1810',
    groundColor: '#0d1a10',
    particlesOn: true,
    bioluminescence: true,
    accent: '#52b788',
    accentDim: '#1b4332',
    skyBg: '#050c17',
  },
}

export function getLightingPreset(): LightingPreset {
  const h = new Date().getHours()
  if (h >= 6 && h < 17) return presets.day
  if (h >= 17 && h < 19) return presets.dusk
  return presets.night
}
