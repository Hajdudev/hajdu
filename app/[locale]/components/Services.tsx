import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolarSystem from "../ui/SolarSystem";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const t = useTranslations("Services");
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const serviceRef = useRef(null);
  const objectRef = useRef(null);
  const textRefOne = useRef(null);
  const textRefTwo = useRef(null);
  const textRefThree = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

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
      },
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
      },
    );
  }, [textRefOne, textRefTwo, textRefThree]);

  useGSAP(() => {
    gsap.to(objectRef.current, {
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top top",
        end: "bottom +=700",
        pin: objectRef.current,
        scrub: 1,
      },
    });
  }, []);
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
        className="h-[21vh] sticky top-0 font-rubic-mono opacity-0 bg-[#0f0f0f] flex justify-center items-center xl:items-end w-full z-10 "
      >
        <h1 className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl text-pink-eraser font-bold text-center  ">
          {t("headline")}
        </h1>
      </div>
      <div
        ref={serviceRef}
        id="services"
        className="h-[250vh] relative w-full bg-[#0f0f0f] flex"
      >
        <div className="w-full md:w-1/2 absolute top-0  left-0  md:relative flex justify-center h-screen md:h-[80vh] items-center">
          <div ref={objectRef} className="w-full h-full ">
            <SolarSystem />
          </div>
        </div>
        <div
          ref={textRef}
          className=" w-full md:w-1/2 relative h-full flex flex-col justify-around p-10 text-paper"
        >
          <div ref={textRefOne} className="sticky w-full left-0 top-1/3">
            <h1 className="font-babas-neue text-3xl text-pink-eraser mb-4">
              {t("section1.title")}
            </h1>
            <p className="max-w-2xl text-md md:text-xl  font-semibold leading-relaxed">
              {t("section1.text")}
            </p>
          </div>
          <div
            ref={textRefTwo}
            className="sticky opacity-0 w-full left-0 top-1/3"
          >
            <h1 className="text-pink-eraser font-babas-neue text-3xl mb-4">
              {t("section2.title")}
            </h1>
            <p className="max-w-2xl text-md md:text-xl font-semibold leading-relaxed">
              {t("section2.text")}
            </p>
          </div>
          <div
            ref={textRefThree}
            className="sticky w-full left-0 opacity-0 top-1/3"
          >
            <h1 className="font-babas-neue text-pink-eraser text-3xl mb-4">
              {t("section3.title")}
            </h1>
            <p className="max-w-2xl text-md md:text-xl font-semibold  leading-relaxed">
              {t("section3.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
