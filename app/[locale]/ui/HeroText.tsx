import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/gsap/gsap";
import { RootState } from "../store/store";
import { useTranslations } from "next-intl";

function HeroText() {
  const t = useTranslations("HeroText");
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.gsap.selected);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const buttonRef = useRef(null);

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
    if (selected === 3) {
      gsap.set(buttonRef.current, {
        x: -25,
        opacity: 0,
      });
      gsap.to(buttonRef.current, {
        x: 0,
        duration: 0.8,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <div className="w-full md:w-1/2 pt-20 flex md:ml-5 lg:ml-30 flex-col font-lustria items-center md:justify-center">
      <div className="w-full ">
        <p
          ref={firstTextRef}
          className="text-5xl lg:text-6xl opacity-0 text-center md:text-left"
        >
          {t("headline1")}
        </p>
      </div>
      <div className="md:mt-5 w-full ">
        <p
          ref={secondTextRef}
          className=" text-5xl mt-2 md:mt-0 lg:text-6xl md:ml-10 font-bold md:font-semibold opacity-0 text-center md:text-left"
        >
          {t("headline2")}
        </p>
      </div>
      <button
        ref={buttonRef}
        className="bg-pink-eraser md:ml-15 opacity-0 self-center md:self-start px-5 font-babas-neue py-2 md:mt-8 rounded-2xl text-3xl  text-white"
      >
        {t("contactButton")}
      </button>
    </div>
  );
}

export default HeroText;
