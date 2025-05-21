import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useRef } from "react";

function HeroTextSub() {
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const textRef = useRef(null);
  useGSAP(() => {
    if (selected == 3) {
      gsap.set(textRef.current, {
        y: 50,
      });
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      });
    }
  }, [selected]);

  return (
    <div className="w-1/2  grid grid-rows-3 h-full">
      <div className="row-start-3 px-30">
        <p ref={textRef} className="text-2xl opacity-0 font-babas-neue ">
          We are a website agency specializing in creating memorable and unique
          online experiences through captivating animations and immersive 3D
          elements. Our primary goal is to drive your business growth and help
          you achieve your objectives with a website that stands out.{" "}
        </p>
      </div>
    </div>
  );
}

export default HeroTextSub;
