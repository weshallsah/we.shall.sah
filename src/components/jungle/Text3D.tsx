'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import type { LightingPreset } from './lighting'

// Updated by CameraRig each frame; read by ScatterWord
export const scrollProgress = { value: 0 }

const lerp = THREE.MathUtils.lerp
const clamp01 = (x: number) => Math.max(0, Math.min(1, x))
const easeOut = (t: number) => 1 - (1 - t) ** 2.2

function makeSeed(n: number) {
  let s = (n * 1337 + 1) | 0
  return () => {
    s = Math.imul(s, 1664525) + 1013904223
    return (s >>> 0) / 0xffffffff
  }
}

// ─── ScatterWord ──────────────────────────────────────────────────────────────
// A single word that explodes outward when the camera is far, then
// flies into its target position as the camera approaches.

interface ScatterWordProps {
  word: string
  /** World-space target when converged */
  targetPos: [number, number, number]
  /** The scroll-T value (0–1) at which this word is centered */
  sectionT: number
  color?: string
  fontSize?: number
  /** Controls how far words fly when scattered */
  scatterRadius?: number
  /** Half-width of the visible T window around sectionT */
  windowHalf?: number
  /** Seed for deterministic random scatter direction */
  seed?: number
  letterSpacing?: number
}

function ScatterWord({
  word,
  targetPos: [tx, ty, tz],
  sectionT,
  color = '#ffffff',
  fontSize = 1,
  scatterRadius = 9,
  windowHalf = 0.13,
  seed = 1,
  letterSpacing = -0.02,
}: ScatterWordProps) {
  const ref = useRef<any>(null)

  const scatter = useMemo(() => {
    const rng = makeSeed(seed)
    return [
      (rng() - 0.5) * scatterRadius * 2.2,
      (rng() - 0.5) * scatterRadius,
      (rng() - 0.5) * scatterRadius * 0.45,
    ] as const
  }, [seed, scatterRadius])

  useFrame(() => {
    const mesh = ref.current
    if (!mesh) return
    const dist = Math.abs(scrollProgress.value - sectionT)
    const f = easeOut(clamp01(1 - dist / windowHalf))

    mesh.position.x = lerp(tx + scatter[0], tx, f)
    mesh.position.y = lerp(ty + scatter[1], ty, f)
    mesh.position.z = lerp(tz + scatter[2], tz, f)
    mesh.fillOpacity = f
  })

  return (
    <Text
      ref={ref}
      color={color}
      fontSize={fontSize}
      anchorX="center"
      anchorY="middle"
      fillOpacity={0}
      letterSpacing={letterSpacing}
      renderOrder={2}
    >
      {word}
    </Text>
  )
}

// ─── AmbientWord ──────────────────────────────────────────────────────────────
// Tiny keyword permanently floating in the scene at low opacity —
// adds atmospheric depth without distracting from section text.

interface AmbientWordProps {
  word: string
  position: [number, number, number]
  color?: string
  bobAmp?: number
  bobOffset?: number
}

function AmbientWord({
  word,
  position,
  color = 'rgba(255,255,255,0.14)',
  bobAmp = 0.12,
  bobOffset = 0,
}: AmbientWordProps) {
  const ref = useRef<any>(null)
  const baseY = position[1]

  useFrame(({ clock }) => {
    const mesh = ref.current
    if (!mesh) return
    mesh.position.y = baseY + Math.sin(clock.elapsedTime * 0.45 + bobOffset) * bobAmp
  })

  return (
    <Text
      ref={ref}
      position={position}
      color={color}
      fontSize={0.28}
      anchorX="center"
      anchorY="middle"
      fillOpacity={0.22}
      renderOrder={1}
    >
      {word}
    </Text>
  )
}

// ─── Text3DLayer ──────────────────────────────────────────────────────────────
// Master component — all 3-D text for the full scene.

export function Text3DLayer({ preset }: { preset: LightingPreset }) {
  const ac = preset.accent   // theme accent colour (green / orange / teal)
  const dim = '#ffffffbb'    // slightly dimmed white

  return (
    <>
      {/* ══ HERO  T≈0.0  camera z≈32  text z=26 ══════════════════════════════ */}
      <ScatterWord word="VISHAL"    targetPos={[ 0,   3.8, 26]} sectionT={0.00} color="#ffffff"  fontSize={3.0} seed={1}  windowHalf={0.15} />
      <ScatterWord word="SAH"       targetPos={[ 0,   0.8, 26]} sectionT={0.00} color={ac}       fontSize={2.2} seed={2}  windowHalf={0.15} />
      <ScatterWord word="BACKEND"   targetPos={[-4.5, 2.5, 23]} sectionT={0.00} color={dim}      fontSize={0.5} seed={3}  windowHalf={0.14} scatterRadius={13} />
      <ScatterWord word="WEB3"      targetPos={[ 4.8, 1.8, 22]} sectionT={0.00} color={dim}      fontSize={0.5} seed={4}  windowHalf={0.14} scatterRadius={13} />
      <ScatterWord word="ARCHITECT" targetPos={[-3.8, 4.8, 21]} sectionT={0.00} color="#ffffff66" fontSize={0.38} seed={5} windowHalf={0.13} scatterRadius={13} />
      <ScatterWord word="BUILDER"   targetPos={[ 3.5, 0.0, 24]} sectionT={0.00} color="#ffffff55" fontSize={0.38} seed={6} windowHalf={0.13} scatterRadius={13} />
      <ScatterWord word="PROTOCOL"  targetPos={[ 0.5, 5.2, 20]} sectionT={0.00} color="#ffffff33" fontSize={0.32} seed={7} windowHalf={0.12} scatterRadius={14} />

      {/* ══ ABOUT  T≈0.21  camera z≈16  text z=12 ════════════════════════════ */}
      <ScatterWord word="ABOUT"     targetPos={[-3.2, 3.6, 12]} sectionT={0.21} color="#ffffff"  fontSize={2.0} seed={11} />
      <ScatterWord word="ME"        targetPos={[ 2.8, 3.6, 12]} sectionT={0.21} color={ac}       fontSize={2.0} seed={12} />
      <ScatterWord word="SYSTEMS"   targetPos={[-4.2, 2.2, 10]} sectionT={0.21} color={dim}      fontSize={0.44} seed={13} scatterRadius={12} />
      <ScatterWord word="PROTOCOLS" targetPos={[ 4.2, 1.8, 10]} sectionT={0.21} color={dim}      fontSize={0.44} seed={14} scatterRadius={12} />
      <ScatterWord word="BRIDGES"   targetPos={[ 0.0, 0.3, 11]} sectionT={0.21} color="#ffffff55" fontSize={0.38} seed={15} scatterRadius={12} />
      <ScatterWord word="WEB2→WEB3" targetPos={[-3.0, 0.6, 10]} sectionT={0.21} color="#ffffff44" fontSize={0.32} seed={16} scatterRadius={12} />

      {/* ══ SKILLS  T≈0.36  camera z≈2  text z=-3 ════════════════════════════ */}
      <ScatterWord word="TECH"      targetPos={[-3.4, 3.4, -3]} sectionT={0.36} color="#ffffff"  fontSize={2.0} seed={21} />
      <ScatterWord word="STACK"     targetPos={[ 3.4, 3.4, -3]} sectionT={0.36} color={ac}       fontSize={2.0} seed={22} />
      <ScatterWord word="NODE.JS"   targetPos={[-4.8, 1.8, -5]} sectionT={0.36} color={dim}      fontSize={0.44} seed={23} scatterRadius={11} />
      <ScatterWord word="SOLIDITY"  targetPos={[ 4.8, 1.4, -5]} sectionT={0.36} color={dim}      fontSize={0.44} seed={24} scatterRadius={11} />
      <ScatterWord word="DOCKER"    targetPos={[-2.8, 0.0, -4]} sectionT={0.36} color="#ffffff55" fontSize={0.38} seed={25} scatterRadius={11} />
      <ScatterWord word="AWS"       targetPos={[ 3.2, 0.0, -4]} sectionT={0.36} color="#ffffff55" fontSize={0.38} seed={26} scatterRadius={11} />
      <ScatterWord word="POSTGRES"  targetPos={[ 0.0, 4.8, -6]} sectionT={0.36} color="#ffffff44" fontSize={0.34} seed={27} scatterRadius={11} />
      <ScatterWord word="HARDHAT"   targetPos={[-4.0, 4.2, -7]} sectionT={0.36} color="#ffffff33" fontSize={0.30} seed={28} scatterRadius={11} />

      {/* ══ PROJECTS  T≈0.50  camera z≈-12  text z=-17 ═══════════════════════ */}
      <ScatterWord word="PROJECTS"  targetPos={[ 0,   3.2,-17]} sectionT={0.50} color={ac}       fontSize={2.2} seed={31} />
      <ScatterWord word="BUILT"     targetPos={[-4.5, 1.8,-19]} sectionT={0.50} color={dim}      fontSize={0.44} seed={32} scatterRadius={10} />
      <ScatterWord word="DEPLOYED"  targetPos={[ 4.5, 2.2,-19]} sectionT={0.50} color={dim}      fontSize={0.44} seed={33} scatterRadius={10} />
      <ScatterWord word="SHIPPED"   targetPos={[ 0.0, 0.4,-18]} sectionT={0.50} color="#ffffff55" fontSize={0.38} seed={34} scatterRadius={10} />
      <ScatterWord word="MAINNET"   targetPos={[-2.5, 4.5,-20]} sectionT={0.50} color="#ffffff44" fontSize={0.32} seed={35} scatterRadius={10} />

      {/* ══ HACKATHONS  T≈0.64  camera z≈-24  text z=-29 ════════════════════ */}
      <ScatterWord word="HACK"      targetPos={[ 0,   3.8,-29]} sectionT={0.64} color="#ffffff"  fontSize={2.0} seed={41} />
      <ScatterWord word="ATHONS"    targetPos={[ 0,   1.2,-29]} sectionT={0.64} color={ac}       fontSize={2.0} seed={42} />
      <ScatterWord word="WINNER"    targetPos={[-4.2, 1.8,-31]} sectionT={0.64} color={dim}      fontSize={0.44} seed={43} scatterRadius={10} />
      <ScatterWord word="BUILDER"   targetPos={[ 4.5, 2.2,-31]} sectionT={0.64} color={dim}      fontSize={0.40} seed={44} scatterRadius={10} />
      <ScatterWord word="3+ EVENTS" targetPos={[ 0.0, 0.3,-30]} sectionT={0.64} color="#ffffff55" fontSize={0.34} seed={45} scatterRadius={10} />
      <ScatterWord word="BOUNTY"    targetPos={[ 3.0, 4.5,-32]} sectionT={0.64} color="#ffffff44" fontSize={0.30} seed={46} scatterRadius={10} />

      {/* ══ EXPERIENCE  T≈0.79  camera z≈-38  text z=-43 ════════════════════ */}
      <ScatterWord word="EXPERIENCE" targetPos={[ 0,   3.0,-43]} sectionT={0.79} color={ac}      fontSize={1.8} seed={51} />
      <ScatterWord word="FULLSTACK"  targetPos={[-4.0, 1.6,-45]} sectionT={0.79} color={dim}     fontSize={0.44} seed={52} scatterRadius={10} />
      <ScatterWord word="REMOTE"     targetPos={[ 4.0, 1.8,-45]} sectionT={0.79} color={dim}     fontSize={0.40} seed={53} scatterRadius={10} />
      <ScatterWord word="PRODUCTION" targetPos={[ 0.0, 0.5,-44]} sectionT={0.79} color="#ffffff55" fontSize={0.36} seed={54} scatterRadius={10} />
      <ScatterWord word="IMPACT"     targetPos={[-3.0, 4.2,-46]} sectionT={0.79} color="#ffffff33" fontSize={0.28} seed={55} scatterRadius={10} />

      {/* ══ CONTACT  T≈0.93  camera z≈-52  text z=-57 ═══════════════════════ */}
      <ScatterWord word="LET'S"     targetPos={[ 0,   3.4,-57]} sectionT={0.93} color="#ffffff"  fontSize={2.2} seed={61} windowHalf={0.12} />
      <ScatterWord word="CONNECT"   targetPos={[ 0,   1.0,-57]} sectionT={0.93} color={ac}       fontSize={2.2} seed={62} windowHalf={0.12} />
      <ScatterWord word="REACH·OUT"   targetPos={[-4.0, 0.0,-59]} sectionT={0.93} color={dim}    fontSize={0.40} seed={63} windowHalf={0.12} scatterRadius={9} />
      <ScatterWord word="COLLABORATE" targetPos={[ 4.2, 2.4,-59]} sectionT={0.93} color={dim}    fontSize={0.36} seed={64} windowHalf={0.12} scatterRadius={9} />
      <ScatterWord word="HIRE·ME"     targetPos={[ 0.0, 4.5,-60]} sectionT={0.93} color="#ffffff44" fontSize={0.30} seed={65} windowHalf={0.12} scatterRadius={9} />

      {/* ══ AMBIENT KEYWORDS — float throughout the full path ════════════════ */}
      <AmbientWord word="TypeScript"  position={[-5.5, 3.5,  20]} bobOffset={0.0} />
      <AmbientWord word="Kubernetes"  position={[ 6.0, 2.2,  10]} bobOffset={1.2} />
      <AmbientWord word="GraphQL"     position={[-6.5, 1.5,   2]} bobOffset={2.4} />
      <AmbientWord word="IPFS"        position={[ 5.5, 3.8,  -6]} bobOffset={0.8} />
      <AmbientWord word="Redis"       position={[-5.0, 0.8, -13]} bobOffset={3.1} />
      <AmbientWord word="Nginx"       position={[ 6.0, 4.0, -20]} bobOffset={1.7} />
      <AmbientWord word="Hardhat"     position={[-6.5, 2.5, -27]} bobOffset={0.3} />
      <AmbientWord word="MongoDB"     position={[ 5.5, 1.2, -33]} bobOffset={2.8} />
      <AmbientWord word="gRPC"        position={[-5.0, 3.0, -39]} bobOffset={1.5} />
      <AmbientWord word="ERC-4337"    position={[ 6.0, 0.6, -44]} bobOffset={0.9} />
      <AmbientWord word="CI/CD"       position={[-5.5, 4.5, -49]} bobOffset={2.2} />
      <AmbientWord word="Ethers.js"   position={[ 5.0, 2.8, -53]} bobOffset={3.5} />
      <AmbientWord word="Spring Boot" position={[-4.5, 1.2,  15]} bobOffset={1.0} />
      <AmbientWord word="Express"     position={[ 5.5, 3.2,  -2]} bobOffset={0.5} />
      <AmbientWord word="IPFS"        position={[-6.0, 2.0, -10]} bobOffset={2.0} />
      <AmbientWord word="Terraform"   position={[ 6.5, 1.8, -36]} bobOffset={1.3} />
    </>
  )
}
