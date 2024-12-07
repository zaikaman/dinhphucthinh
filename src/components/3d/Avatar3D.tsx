'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'

export default function Avatar3D() {
  const group = useRef<Group>(null!)
  
  // Load the 3D model
  const { scene, animations } = useGLTF('/models/avatar.glb')
  const { actions } = useAnimations(animations, scene)

  // Play idle animation on load
  useEffect(() => {
    if (actions.idle) {
      actions.idle.play()
    }
  }, [actions])

  // Animate
  useFrame((state) => {
    if (group.current) {
      // Smooth follow mouse
      const mouse = {
        x: (state.mouse.x * Math.PI) / 10,
        y: (state.mouse.y * Math.PI) / 10
      }
      
      group.current.rotation.y += (mouse.x - group.current.rotation.y) * 0.05
      group.current.rotation.x += (mouse.y - group.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={2}
        position={[0, 0, 0]}  
      />
    </group>
  )
}

// Pre-load the model
useGLTF.preload('/models/avatar.glb')
