"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Lenis from "lenis";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export default function Home() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  useEffect(() => {
    if (selected == 5) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    }
  }, [selected]);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
}
