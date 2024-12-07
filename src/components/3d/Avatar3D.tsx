'use client'

import { useEffect, useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader, Mesh, DoubleSide } from 'three'
import * as bodyPix from '@tensorflow-models/body-pix'
import * as tf from '@tensorflow/tfjs'

export default function Avatar3D({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<Mesh>(null!)
  const [segmentedImage, setSegmentedImage] = useState<string | null>(null)
  
  // Load and process image
  useEffect(() => {
    const processImage = async () => {
      // Load BodyPix model
      const net = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      })

      // Load image
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = imageUrl
      
      img.onload = async () => {
        // Create canvas
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Draw image
        ctx.drawImage(img, 0, 0)

        // Get segmentation
        const segmentation = await net.segmentPerson(img)

        // Apply mask
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const pixels = imageData.data
        
        for (let i = 0; i < segmentation.data.length; i++) {
          const isBody = segmentation.data[i]
          if (!isBody) {
            pixels[i * 4 + 3] = 0 // Set alpha to 0 for non-body pixels
          }
        }

        ctx.putImageData(imageData, 0, 0)
        setSegmentedImage(canvas.toDataURL())
      }
    }

    processImage()
  }, [imageUrl])

  // Load texture
  const texture = useLoader(
    TextureLoader,
    segmentedImage || imageUrl
  )

  // Animate
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  // Calculate aspect ratio to maintain image proportions
  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1
  const width = 4 // Increased base width
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
