'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { Points as ThreePoints } from 'three'

export default function HeroScene({ count = 5000 }) {
  const points = useRef<ThreePoints>(null!)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      const r = 20 * Math.cbrt(Math.random())

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.1
      points.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#4ade80"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
