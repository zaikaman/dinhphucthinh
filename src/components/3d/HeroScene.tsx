'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { Points as ThreePoints } from 'three'

export default function HeroScene({ count = 5000 }) {
  const points = useMemo(() => {
    const arr = random.inSphere(new Float32Array(count * 3), { radius: 20 })
    return Float32Array.from(arr)
  }, [count])

  const ref = useRef<ThreePoints>(null!)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1
      ref.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3}>
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
