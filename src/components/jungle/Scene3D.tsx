'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import type { LightingPreset } from './lighting'

// ─── Camera spline: dives from the jungle edge (z=32) to the hidden lagoon (z=-56) ───
const CAMERA_PATH = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0,    3,    32),
    new THREE.Vector3(-1.2, 2.5,  22),
    new THREE.Vector3(0.8,  2,    14),   // About – clearing
    new THREE.Vector3(-0.5, 1.8,   6),
    new THREE.Vector3(1,    1.5,   0),   // Skills – dense canopy
    new THREE.Vector3(-0.8, 1.2,  -8),
    new THREE.Vector3(0.5,  1,   -16),   // Projects – riverbank
    new THREE.Vector3(-0.4, 0.8, -24),
    new THREE.Vector3(0,    0.6, -32),   // Hackathons – campfire
    new THREE.Vector3(0.5,  0.4, -40),
    new THREE.Vector3(-0.3, 0.2, -48),   // Experience – ancient grove
    new THREE.Vector3(0,    0,   -56),   // Contact – hidden lagoon
  ],
  false,
  'catmullrom',
  0.5,
)

// Deterministic LCG for consistent tree placement across renders
function makeSeed(seed: number) {
  let s = seed
  return () => {
    s = Math.imul(s, 1664525) + 1013904223
    return (s >>> 0) / 0xffffffff
  }
}

// ─── Camera ────────────────────────────────────────────────────────────────────
function CameraRig() {
  const smoothT = useRef(0)
  const pos = useMemo(() => new THREE.Vector3(), [])
  const look = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ camera, clock }) => {
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight)
    const rawT = window.scrollY / maxScroll
    const t = Math.max(0, Math.min(0.9999, rawT))
    smoothT.current += (t - smoothT.current) * 0.05

    const st = smoothT.current
    CAMERA_PATH.getPointAt(st, pos)

    // Gentle ambient sway so the scene feels alive when not scrolling
    const et = clock.elapsedTime
    pos.x += Math.sin(et * 0.38) * 0.045
    pos.y += Math.cos(et * 0.27) * 0.025

    camera.position.copy(pos)

    // Always look slightly ahead on the spline
    CAMERA_PATH.getPointAt(Math.min(0.9999, st + 0.07), look)
    camera.lookAt(look)
  })

  return null
}

// ─── Background clear colour ───────────────────────────────────────────────────
function SkyBackground({ color }: { color: string }) {
  const { gl } = useThree()
  useEffect(() => {
    gl.setClearColor(color, 1)
  }, [color, gl])
  return null
}

// ─── Lighting ──────────────────────────────────────────────────────────────────
function JungleLighting({ preset }: { preset: LightingPreset }) {
  return (
    <>
      <fog attach="fog" args={[preset.fogColor, preset.fogNear, preset.fogFar]} />
      <ambientLight color={preset.ambientColor} intensity={preset.ambientIntensity} />
      <directionalLight
        color={preset.sunColor}
        intensity={preset.sunIntensity}
        position={preset.sunPosition}
      />
      {/* Upwelling fill from the forest floor */}
      <hemisphereLight
        args={[preset.leafColor as THREE.ColorRepresentation, preset.groundColor as THREE.ColorRepresentation, 0.4]}
      />
      {/* Night: blue moonlight from behind-left */}
      {preset.timeOfDay === 'night' && (
        <pointLight color="#8ab4d4" intensity={1.2} position={[-8, 10, 5]} />
      )}
      {/* Dusk: warm backlight */}
      {preset.timeOfDay === 'dusk' && (
        <pointLight color="#ff6b35" intensity={0.8} position={[15, 3, -5]} />
      )}
    </>
  )
}

// ─── Single tree (trunk + 3 canopy cones) ─────────────────────────────────────
function Tree({
  pos,
  scale,
  preset,
}: {
  pos: [number, number, number]
  scale: number
  preset: LightingPreset
}) {
  return (
    <group position={pos} scale={scale}>
      {/* trunk */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.18, 0.3, 3, 5]} />
        <meshStandardMaterial color={preset.trunkColor} roughness={1} />
      </mesh>
      {/* lower canopy */}
      <mesh position={[0, 3.4, 0]}>
        <coneGeometry args={[1.65, 2.8, 6]} />
        <meshStandardMaterial
          color={preset.leafColor}
          roughness={0.9}
          emissive={preset.bioluminescence ? preset.leafColor : '#000'}
          emissiveIntensity={preset.bioluminescence ? 0.08 : 0}
        />
      </mesh>
      {/* mid canopy */}
      <mesh position={[0, 4.7, 0]}>
        <coneGeometry args={[1.1, 2.4, 6]} />
        <meshStandardMaterial color={preset.leafColor} roughness={0.9} />
      </mesh>
      {/* top canopy */}
      <mesh position={[0, 5.65, 0]}>
        <coneGeometry args={[0.65, 1.8, 5]} />
        <meshStandardMaterial color={preset.leafColor} roughness={0.9} />
      </mesh>
    </group>
  )
}

// ─── Mushroom (ambient decorative, glows at night) ────────────────────────────
function Mushroom({
  pos,
  preset,
}: {
  pos: [number, number, number]
  preset: LightingPreset
}) {
  const capColor = preset.bioluminescence ? '#52b788' : '#c1440e'
  return (
    <group position={pos} scale={0.38}>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.6, 6]} />
        <meshStandardMaterial color="#c9a87c" roughness={1} />
      </mesh>
      <mesh position={[0, 0.82, 0]}>
        <sphereGeometry args={[0.52, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color={capColor}
          roughness={0.8}
          emissive={preset.bioluminescence ? capColor : '#000'}
          emissiveIntensity={preset.bioluminescence ? 0.6 : 0}
        />
      </mesh>
    </group>
  )
}

// ─── Vine: TubeGeometry along a wavy curve ────────────────────────────────────
function Vine({
  x,
  z,
  preset,
}: {
  x: number
  z: number
  preset: LightingPreset
}) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 5.5, z),
        new THREE.Vector3(x + 0.4, 4, z + 0.2),
        new THREE.Vector3(x - 0.2, 2.5, z - 0.1),
        new THREE.Vector3(x + 0.1, 1, z + 0.1),
        new THREE.Vector3(x, -0.5, z),
      ]),
    [x, z],
  )

  return (
    <mesh>
      <tubeGeometry args={[curve, 10, 0.04, 4, false]} />
      <meshStandardMaterial color={preset.leafColor} roughness={1} />
    </mesh>
  )
}

// ─── Flora: all trees, mushrooms, vines, ground ───────────────────────────────
function JungleFlora({ preset }: { preset: LightingPreset }) {
  const trees = useMemo(() => {
    const rng = makeSeed(42)
    return Array.from({ length: 84 }, (_, i) => {
      const side = i % 2 === 0 ? 1 : -1
      const z = 36 - i * 1.15
      const x = side * (5.5 + rng() * 7.5)
      const scale = 0.75 + rng() * 0.65
      return { x, z, scale }
    })
  }, [])

  const mushrooms = useMemo(() => {
    const rng = makeSeed(99)
    return Array.from({ length: 24 }, (_, i) => ({
      x: (rng() - 0.5) * 14,
      z: 32 - i * 4.2,
    }))
  }, [])

  const vines = useMemo(() => {
    const rng = makeSeed(77)
    return Array.from({ length: 18 }, (_, i) => ({
      x: (i % 2 === 0 ? 1 : -1) * (4.5 + rng() * 4),
      z: 28 - i * 5,
    }))
  }, [])

  return (
    <group>
      {/* Ground plane stretching the full camera journey */}
      <mesh position={[0, -1, -12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[46, 110]} />
        <meshStandardMaterial color={preset.groundColor} roughness={1} />
      </mesh>

      {trees.map((t, i) => (
        <Tree key={i} pos={[t.x, -1, t.z]} scale={t.scale} preset={preset} />
      ))}

      {mushrooms.map((m, i) => (
        <Mushroom key={i} pos={[m.x, -1, m.z]} preset={preset} />
      ))}

      {vines.map((v, i) => (
        <Vine key={i} x={v.x} z={v.z} preset={preset} />
      ))}
    </group>
  )
}

// ─── Firefly / bioluminescence particle system ────────────────────────────────
function FireflyParticles({ preset }: { preset: LightingPreset }) {
  const count = 120
  const pointsRef = useRef<THREE.Points>(null)

  const { geometry, initial, offsets } = useMemo(() => {
    const rng = makeSeed(55)
    const initial = new Float32Array(count * 3)
    const offsets = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      initial[i * 3]     = (rng() - 0.5) * 20
      initial[i * 3 + 1] = rng() * 6.5
      initial[i * 3 + 2] = rng() * 100 - 62
      offsets[i] = rng() * Math.PI * 2
    }
    const geo = new THREE.BufferGeometry()
    const posAttr = new THREE.BufferAttribute(initial.slice(), 3)
    posAttr.setUsage(THREE.DynamicDrawUsage)
    geo.setAttribute('position', posAttr)
    return { geometry: geo, initial, offsets }
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const attr = pointsRef.current.geometry.getAttribute('position') as THREE.BufferAttribute
    const t = clock.elapsedTime
    for (let i = 0; i < count; i++) {
      attr.setX(i, initial[i * 3]     + Math.sin(t * 0.28 + offsets[i] * 0.7) * 0.22)
      attr.setY(i, initial[i * 3 + 1] + Math.sin(t * 0.75 + offsets[i])       * 0.35)
    }
    attr.needsUpdate = true
  })

  if (!preset.particlesOn) return null

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color={preset.bioluminescence ? '#7fff8a' : '#ffff99'}
        size={preset.bioluminescence ? 0.12 : 0.07}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  )
}

// ─── Night-only: bioluminescent point lights along path ───────────────────────
function BioLights({ preset }: { preset: LightingPreset }) {
  if (!preset.bioluminescence) return null
  const positions: [number, number, number][] = [
    [-3, 0.5, 0], [4, 0.3, -16], [-2, 0.4, -32], [3, 0.2, -48],
  ]
  return (
    <>
      {positions.map((p, i) => (
        <pointLight key={i} color="#52b788" intensity={0.6} distance={8} position={p} />
      ))}
    </>
  )
}

// ─── Public export: the full 3-D scene ────────────────────────────────────────
export function Scene3D({ preset }: { preset: LightingPreset }) {
  return (
    <>
      <SkyBackground color={preset.skyBg} />
      <CameraRig />
      <JungleLighting preset={preset} />
      <JungleFlora preset={preset} />
      <FireflyParticles preset={preset} />
      <BioLights preset={preset} />
    </>
  )
}
