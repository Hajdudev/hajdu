"use client"
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Lenis from "lenis";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number){
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return <div>
    <Hero />
    <Services />
  </div>
}
