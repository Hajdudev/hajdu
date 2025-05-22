import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Services() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const serviceRef = useRef(null);
  useGSAP(() => {
    if (selected == 3) {
      gsap.set(serviceRef.current, {
        y: 100,
      });
      gsap.to(serviceRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
      });
    }
  }, [selected]);
  return (
    <div
      ref={serviceRef}
      className="h-[100vh] opacity-0 rounded-t-2xl w-full "
    >
      <div className="h-[20vh] font-rubic-mono relative flex justify-center items-center text-9xl w-full">
        <h1 className="text-9xl">
          OUR SERVICES
        </h1>
      </div>
      <div id="services" className="h-[80vh] w-full "></div>
    </div>
  );
}
