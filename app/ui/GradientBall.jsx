"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/gsap/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fragmentShader, vertexShader } from "../lib/helper";

gsap.registerPlugin(ScrollTrigger);

function AnimatedSphere() {
  const sphereRef = useRef();
  const uniforms = useRef({
    time: { value: 0.0 },
    Cobalt: { value: new THREE.Color(25 / 255, 52 / 255, 151 / 255) },
    opacity: { value: 0.0 },
  });
  const materialRef = useRef();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.gsap.selected);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  useEffect(() => {
    if (selected === 1 || selected === undefined) {
      gsap.to(materialRef.current.uniforms.opacity, {
        value: 1,
        duration: 1,
        onComplete: () => {
          dispatch(setSelected(2));
        },
      });
    }
  }, [selected]);

  useGSAP(() => {
    if (selected === 3) {
      gsap.to(sphereRef.current.scale, {
        x: 1 * (3.1 / 2.5),
        y: 1 * (3.1 / 2.5),
        z: 1 * (3.1 / 2.5),

        duration: 0.8,
        onComplete: () => {
          dispatch(setSelected(4));
        },
      });
    }
  }, [selected]);

  useGSAP(() => {
    if (selected == 4) {
      gsap.to(sphereRef.current.scale, {
        x: 1 * 1.38,
        y: 1 * 1.38,
        z: 1 * 1.38,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      });
    }
  }, [selected]);

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2.5, 32, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <AnimatedSphere />
    </Canvas>
  );
}
