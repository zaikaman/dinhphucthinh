'use client'

import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader, Mesh, DoubleSide } from 'three'

export default function Avatar3D({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<Mesh>(null!)

  // Load texture directly
  const texture = useLoader(TextureLoader, imageUrl)

  // Animate
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  // Calculate aspect ratio to maintain image proportions
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1
  const width = 4 // Base width
  const height = width / aspectRatio

  return (
    <mesh ref={meshRef} scale={[width, height, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent={true}
        side={DoubleSide}
      />
    </mesh>
  )
}
