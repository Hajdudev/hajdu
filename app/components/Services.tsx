import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const objectRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(objectRef.current, {
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top top",
        end: "bottom center",
        pin: objectRef.current,
        scrub: 1,
        markers: true, // Remove this on production
      },
      rotation: 360,
    });
  }, []);

  return (
    <div className="min-h-[220vh] w-full bg-slate-100 flex flex-col">
      {/* Header Section */}
      <div className="h-[20vh] font-rubic-mono sticky top-0 flex justify-center items-center w-full z-10 bg-white/10 backdrop-blur-lg">
        <div className="relative w-full">
          <h1 className="text-8xl lg:text-9xl text-pink-eraser font-bold text-center mt-5 tracking-tight leading-none">
            OUR SOLUTIONS
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cobal rounded-full"></div>
        </div>
      </div>
      {/* Main Scroll Section */}
      <div
        ref={serviceRef}
        id="services"
        className="h-[200vh] w-full flex"
      >
        <div className="w-1/2 flex justify-center  h-full">
          <div ref={objectRef} className="w-44 h-44 bg-black relative"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-56 p-10 text-paper">
          <div className="w-full">
            <h1 className="font-notable text-3xl text-pink-eraser mb-4">
              Visual Storytelling That Resonates
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed">
              Imagine a website so visually stunning, so engaging, that it
              leaves a lasting impression on every visitor. We craft custom
              websites that go beyond the ordinary, incorporating captivating
              animations and immersive 3D elements that will be etched into your
              customers&apos; minds. More than just eye-catching, these visual
              elements are strategically designed to enhance your brand story
              and drive business growth.
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-pink-eraser font-notable text-3xl mb-4">
              Your Vision, Our Guidance, Seamless Results
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed">
              We understand that building a website is a journey. That&apos;s
              why we prioritize a collaborative partnership, guiding you through
              every step of the process. We listen intently to your vision,
              anticipate your needs, and provide expert guidance to create a
              website that not only meets your expectations but exceeds them.
              Our goal is to seamlessly convert visitors into loyal customers,
              maximizing your online potential.
            </p>
          </div>
          <div className="w-full">
            <h1 className="font-notable text-pink-eraser text-3xl mb-4">
              High-Performance Websites, Built for Speed & Reliability
            </h1>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed">
              In today&apos;s fast-paced digital world, speed and reliability
              are paramount. We leverage the latest web technologies to build
              websites that are not only visually impressive but also
              lightning-fast and rock-solid. We tailor our approach to your
              specific needs, ensuring your website is optimized for peak
              performance and a seamless user experience. We also believe in
              transparency and collaboration, keeping you actively involved
              throughout the development process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
