import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { RootState } from "../store/store";
import { useRef } from "react";
import { useTranslations } from "next-intl";

function HeroTextSub() {
  const t = useTranslations("HeroTextSub");
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
    <div className="md:w-1/2 md:grid md:grid-rows-9 md:h-full">
      <div className="md:row-start-6 lg:row-start-7 px-10 lg:px-30">
        <p
          ref={textRef}
          className="md:text-2xl text-lg opacity-0 font-babas-neue "
        >
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default HeroTextSub;
