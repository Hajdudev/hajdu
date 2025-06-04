import { useGSAP } from "@gsap/react";
import GradientBall from "../ui/GradientBall";
import HeroText from "../ui/HeroText";
import HeroTextSub from "../ui/HeroTextSub";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export default function Hero() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.to(textsRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#hero",
        start: "bottom top",
        end: "bottom -=1500",
        scrub: true,
      },
    });
  }, []);
  const textsRef = useRef(null);

  return (
    <div id="hero" className="w-screen  sticky top-0 h-[80vh]  -z-1">
      <div className="fixed left-0 top-0  w-screen h-screen -z-10">
        <GradientBall />
      </div>

      <div
        ref={textsRef}
        className="h-full flex w-full flex-col justify-around items-center md:flex-row relative z-10"
      >
        <HeroText />
        <HeroTextSub />
      </div>
    </div>
  );
}
