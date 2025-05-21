import GradientBall from "../ui/GradientBall";
import HeroText from "../ui/HeroText";
export default function Hero() {
  return (
    <div
      id="hero"
      className="w-screen top-0 sticky h-[80vh] overflow-hidden -z-1"
    >
      <div className="absolute right-0 -bottom-50 w-full h-screen -z-10">
        <GradientBall />
      </div>

      <div className="h-full flex w-full relative z-10">
        <HeroText />
      </div>
    </div>
  );
}
