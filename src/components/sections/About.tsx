'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Avatar3D from '../3d/Avatar3D'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      {/* 3D Model Container */}
      <div className="w-full md:w-1/2 h-[600px] relative">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Avatar3D imageUrl="/images/your-photo.jpg" />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <p className="text-gray-300">
          Hi! I'm Đinh Phúc Thịnh, a passionate developer with expertise in AI, Web, and Mobile development.
          I love creating innovative solutions and bringing ideas to life through code.
        </p>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-green-400">Skills</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Full Stack Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-green-400">Education</h3>
          <p className="text-gray-300">
            Computer Science Major
          </p>
        </div>
        <div className="pt-4">
          <p className="text-gray-300">
            TOEIC Score: <span className="text-green-400 font-semibold">960</span>
          </p>
        </div>
      </div>
    </section>
  )
}
