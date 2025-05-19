"use client"
import { Canvas } from "@react-three/fiber";


export default function GradientBall() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Canvas>
    </div>
  )
}

