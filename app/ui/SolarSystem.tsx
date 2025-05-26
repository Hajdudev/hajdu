"use client"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"


function SolarSystem() {
  const solarSystemRef = useRef(null)
  return (
    <Canvas>
      <ambientLight />
      <group>
        <mesh ref={solarSystemRef}>
          <sphereGeometry args={[1.4, 32, 64]} />
        </mesh>
        <mesh position={[3, 4, 3]} ref={solarSystemRef}>
          <sphereGeometry args={[1, 32, 64]} />

        </mesh>
      </group>
    </Canvas>
  )
}

export default SolarSystem
