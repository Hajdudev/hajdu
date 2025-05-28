import GradientBall from "../ui/GradientBall";
import HeroText from "../ui/HeroText";
import HeroTextSub from "../ui/HeroTextSub";
export default function Hero() {
  return (
    <div id="hero" className="w-screen  sticky top-0 h-[80vh]  -z-1">
      <div className="fixed left-0 top-0  w-screen h-screen -z-10">
        <GradientBall />
      </div>

      <div className="h-full flex w-full flex-col justify-around items-center md:flex-row relative z-10">
        <HeroText />
        <HeroTextSub />
      </div>
    </div>
  );
}
