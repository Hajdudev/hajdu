"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelected } from "../store/gsap/gsap";

export default function Header() {
  const selected = useSelector((state: RootState) => state.gsap.selected)
  const dispatch = useDispatch();
  useGSAP(() => {
    if (selected == 4){
    gsap.set(headerRef.current, { y: -100, opacity: 0 });
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,       
      ease: "power2.out"  

    });
    dispatch(setSelected(5));
    }
  },[selected])
  const headerRef = useRef(null)
  return (
    <div ref={headerRef} id="header" className="w-screen opacity-0  fixed z-10 flex justify-between items-center px-16 py-4  h-auto">
      <div className="w-16 h-16  relative">
        <Image src='/images/Logo.png' priority alt="Logo" fill sizes="cover"/> 
      </div>
      <div className="flex gap-13 justify-between items-center">
        <span className="text-xl text-paper/80">About</span>
        <span className="text-xl text-paper/80">Services</span>
        <span className="text-xl text-paper/80">Pricing</span>
        <button className=" bg-gradient-to-r rounded-3xl animate-background-animation from-cobal via-blue-400 to-cobal text-2xl  px-7 py-2">Contact</button>
      </div>
    </div>
  )
}

