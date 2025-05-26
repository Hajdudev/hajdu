import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolarSystem from "../ui/SolarSystem";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const serviceRef = useRef(null);
  const objectRef = useRef(null);
  const textRefOne = useRef(null);
  const textRefTwo = useRef(null);
  const textRefThree = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
//pinning the text 
  useGSAP(() => {
    gsap.to(textRefOne.current, {
      scrollTrigger: {
        trigger: textRefOne.current,
        start: "top top",
        endTrigger: textRefTwo.current,
        end: "top center",

        scrub: 1,
      },
      opacity: 0,
    });

    gsap.fromTo(
      textRefTwo.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: textRefTwo.current,
          start: "top center",
          end: "center center",

          scrub: 1,
        },
        opacity: 1,
        immediateRender: false,
      }
    );

    gsap.to(textRefTwo.current, {
      scrollTrigger: {
        trigger: textRefThree.current,
        start: "top center",
        end: "center center",

        scrub: 1,
      },
      opacity: 0,
    });

    gsap.fromTo(
      textRefThree.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: textRefThree.current,
          start: "top center",
          end: "center center",

          scrub: 1,
        },
        opacity: 1,
        immediateRender: false,
      }
    );
  }, [textRefOne, textRefTwo, textRefThree]);

  //pinning the solar system
  useGSAP(() => {
    gsap.to(objectRef.current, {
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top top",
        end: "bottom center",
        pin: objectRef.current,
        scrub: 1,
      },
    });
  }, []);
  //lading animatoin
  useGSAP(() => {
    if (selected === 3) {
      gsap.set(sectionRef.current, {
        y: 100,
        opacity: 0,
      });
      gsap.to(sectionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  }, [selected]);

  return (
    <div className="min-h-[220vh] flex flex-col">
      <div
        ref={sectionRef}
        className="h-[20vh] sticky top-0 font-rubic-mono opacity-0 bg-[#0f0f0f] flex justify-center items-center w-full z-10 "
      >
        <div className="relative w-full">
          <h1 className="text-8xl lg:text-9xl text-pink-eraser font-bold text-center mt-5 tracking-tight leading-none">
            OUR SOLUTIONS
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cobal rounded-full"></div>
        </div>
      </div>
      <div
        ref={serviceRef}
        id="services"
        className="h-[250vh] w-full bg-[#0f0f0f] flex"
      >
        <div className="w-1/2 flex justify-center h-[80vh] items-center">
          <div ref={objectRef} className="w-full h-full relative">
            <SolarSystem />
          </div>
        </div>
        <div
          ref={textRef}
          className="w-1/2 relative h-full flex flex-col justify-around p-10 text-paper"
        >
          <div ref={textRefOne} className="sticky w-full left-0 top-1/3">
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
          <div ref={textRefTwo} className="sticky opacity-0 w-full left-0 top-1/3">
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
          <div ref={textRefThree} className="sticky w-full left-0 opacity-0 top-1/3">
            <h1 className="font-notable text-pink-eraser text-3xl mb-4">
              High-Performance Websites, Built for Speed & Reliability
            </h1>
            <p className="max-w-2xl text-xl font-semibold  leading-relaxed">
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
