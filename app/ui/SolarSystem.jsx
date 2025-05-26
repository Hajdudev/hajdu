"use client";
import { CameraControls, SpotLight } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

function MyMesh() {
  const sunRef = useRef();
  const planetRefs = useRef([]);
  const orbitAngles = useRef(Array(8).fill(0));

  const [
    sunMap,
    mercuryMap,
    venusMap,
    earthMap,
    marsMap,
    jupiterMap,
    saturnMap,
    uranusMap,
    neptuneMap,
  ] = useLoader(TextureLoader, [
    "/images/sun.jpg",
    "/images/mercury.jpg",
    "/images/venus.jpg",
    "/images/earth.jpg",
    "/images/mars.jpg",
    "/images/jupiter.jpg",
    "/images/saturn.jpg",
    "/images/uranus.jpg",
    "/images/neptune.jpg",
  ]);

  const sizes = [1.2, 0.15, 0.35, 0.37, 0.22, 0.7, 0.6, 0.5, 0.5];
  const distances = [0, 2, 2.8, 3.5, 4.2, 5.2, 6.2, 7.2, 8.2];

  const orbitSpeeds = [
    0, // Sun (doesn't orbit)
    3.2, // Mercury
    2.1, // Venus
    1.7, // Earth
    1.4, // Mars
    1.1, // Jupiter
    0.9, // Saturn
    0.7, // Uranus
    0.5, // Neptune
  ];

  const rotationSpeeds = [
    0.18, // Sun
    0.5, // Mercury
    0.4, // Venus
    0.7, // Earth
    0.6, // Mars
    0.8, // Jupiter
    0.7, // Saturn
    0.6, // Uranus
    0.5, // Neptune
  ];

  // Planet textures
  const textures = [
    sunMap,
    mercuryMap,
    venusMap,
    earthMap,
    marsMap,
    jupiterMap,
    saturnMap,
    uranusMap,
    neptuneMap,
  ];

  useFrame((_, delta) => {
    if (sunRef.current) sunRef.current.rotation.y += delta * rotationSpeeds[0];
    for (let i = 1; i < 9; i++) {
      if (planetRefs.current[i]) {
        planetRefs.current[i].rotation.y += delta * rotationSpeeds[i];
        orbitAngles.current[i] += delta * orbitSpeeds[i];
        planetRefs.current[i].position.x =
          Math.cos(orbitAngles.current[i]) * distances[i];
        planetRefs.current[i].position.z =
          Math.sin(orbitAngles.current[i]) * distances[i];
      }
    }
  });

  return (
    <group>
      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[sizes[0], 32, 64]} />
        <meshStandardMaterial map={textures[0]} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i + 1}
          ref={(el) => (planetRefs.current[i + 1] = el)}
          position={[distances[i + 1], 0, 0]}
        >
          <sphereGeometry args={[sizes[i + 1], 32, 64]} />
          <meshStandardMaterial map={textures[i + 1]} />
        </mesh>
      ))}
    </group>
  );
}

function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 6, 18], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[1, 2, 3]} intensity={10}  color={"white"} />
      <MyMesh />
    </Canvas>
  );
}

export default SolarSystem;
