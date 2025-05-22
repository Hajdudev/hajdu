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
      className="h-auto opacity-0 rounded-t-3xl  flex-col w-full bg-paper/5 backdrop-blur-md relative overflow-hidden flex" // Added flex
    >
      <div className="h-[20vh] font-rubic-mono sticky top-0 flex justify-center items-center w-full">
        <h1 className="text-8xl lg:text-9xl text-pink-eraser font-bold text-center mt-5 tracking-tight leading-none">
          OUR SOLUTIONS
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cobal rounded-full"></div>
      </div>
      <div id="services" className="h-auto w-full flex">
        <div className="w-1/2 h-full "></div>
        <div className="flex flex-col gap-56 p-10 w-1/2 h-full text-paper">
          <div className="w-full">
            <h1 className="font-notable text-3xl mb-4">
              Visual Storytelling That Resonates
            </h1>
            <p className="max-w-152 text-xl font-semibold leading-relaxed">
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
            <h1 className="font-notable text-3xl mb-4">
              Your Vision, Our Guidance, Seamless Results
            </h1>
            <p className="max-w-152 text-xl font-semibold leading-relaxed">
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
            <h1 className="font-notable text-3xl mb-4">
              High-Performance Websites, Built for Speed & Reliability
            </h1>
            <p className="max-w-152 text-xl font-semibold leading-relaxed">
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
