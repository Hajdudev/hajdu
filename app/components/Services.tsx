import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Services() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const serviceRef = useRef(null);

  useGSAP(() => {
    if (selected === 3) {
      gsap.set(serviceRef.current, {
        y: 100,
        opacity: 0,
      });
      gsap.to(serviceRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  }, [selected]);

  return (
    <div
      ref={serviceRef}
      className="h-[100vh] opacity-0 rounded-t-3xl w-full bg-paper/5 backdrop-blur-md relative overflow-hidden" // Added background and blur
    >
      <div className="h-[20vh] font-rubic-mono relative flex justify-center items-center w-full">
        <h1 className="text-8xl lg:text-9xl text-pink-eraser font-bold text-center mt-5 tracking-tight leading-none">
          OUR SERVICES
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cobal rounded-full"></div>
      </div>
      <div
        id="services"
        className="h-[80vh] w-full flex flex-col items-center justify-center"
      ></div>
    </div>
  );
}
