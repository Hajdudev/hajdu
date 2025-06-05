"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Lenis from "lenis";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Cards from "./components/Cards";
import Contact from "./components/Contact";

export default function Home() {
  const selected = useSelector((state: RootState) => state.gsap.selected);

useEffect(() => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}, [])
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    if (selected == 4) {
      document.body.style.overflow = "auto";
      document.body.removeAttribute("data-lenis-prevent");
    } else {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    }
  }, [selected]);
  return (
    <div>
      <Hero />
      <Services />
      <Cards />
      <Contact />
    </div>
  );
}
