import { useRef } from "react";
import Card from "../ui/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const cardImages = [
  "/images/discovery.jpg",
  "/images/design.jpg",
  "/images/development.jpg",
  "/images/launch.jpg",
];

function Cards() {
  const t = useTranslations("Cards");
  const steps = t.raw("steps") as Array<{ title: string; text: string }>;

  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const container = cardsRef.current;
      const cardElems = container?.querySelectorAll(".card-section");
      if (!container || !cardElems?.length) return;

      gsap.to(container, {
        x: () => `-${(cardElems.length - 1) * window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerWidth * (cardElems.length - 1)}`,
          scrub: 0.5,
          pin: true,
        },
      });
    });
  }, []);

  return (
    <section className="relative w-full overflow-x-hidden">
      <div
        ref={cardsRef}
        className="lg:w-auto w-screen h-auto lg:shrink-0 lg:flex mt-15"
      >
        {steps.map((card, idx) => (
          <Card
            title={card.title}
            text={card.text}
            img={cardImages[idx]}
            key={card.title + idx}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
