import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap"
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/gsap/gsap";
import { RootState } from "../store/store";

function HeroText () {

  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useGSAP(() => {
    if (selected === 2) {
      const textElements = [firstTextRef.current, secondTextRef.current];

      if (textElements[0] && textElements[1]) {
        gsap.set(textElements, {
          opacity: 0,
          y: 25,
        });
        gsap.to(textElements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.3,
          onComplete: () => {
            dispatch(setSelected(3));
          },
        });
      }
    }
  }, [selected]);

  return (
        <div className="w-1/2 flex flex-col font-lustria items-center justify-center">
          <div className="w-full ml-20">
            <p ref={firstTextRef} className="text-6xl text-left">
              From Concepts To Clicks
            </p>
          </div>
          <div className="mt-5 w-full ml-20">
            <p ref={secondTextRef} className="text-6xl font-bold text-left">
              We Build Websites That Drive Results
            </p>
          </div>
          <button className="bg-cobal self-start ml-10 px-6 py-3 mt-8 rounded-full text-white">
            Contact Us
          </button>
        </div>
  )
}

export default HeroText
