import { useRef } from "react";
import Card from "../ui/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    title: "Goal Setting & Discovery",
    text: "We start by getting to know you and your business. Through an in-depth conversation, we identify your goals, target audience, and the results you want to achieve. This helps us build a strategy and vision tailored to your unique needs.",
    img: "/images/discovery.jpg",
  },
  {
    title: "Design Exploration",
    text: "Once we understand your goals, our design team creates visual concepts and wireframes. We collaborate closely with you for feedback, ensuring the design matches your brand, values, and vision. Your input shapes every detail before we move forward.",
    img: "/images/design.jpg",
  },
  {
    title: "Website Development",
    text: "With the design approved, our developers build your website using modern, robust technologies. We focus on speed, usability, and mobile responsiveness, making sure your site looks great and works flawlessly on every device.",
    img: "/images/development.jpg",
  },
  {
    title: "Launch & Delivery",
    text: "After thorough testing and final tweaks, we launch your website to the world! We take care of every detail for a smooth release and provide you with the guidance and ongoing support you need as your website grows.",
    img: "/images/launch.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger, useGSAP);
function Cards() {
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
          scrub: 1,
          pin: true,
        },
      });
    });
  }, []);
  return (
    <div
      ref={cardsRef}
      className="lg:w-auto w-screen h-auto lg:shrink-0 lg:flex mt-15 "
    >
      {cards.map((card, idx) => (
        <Card
          title={card.title}
          text={card.text}
          img={card.img}
          key={card.title + idx}
        />
      ))}
    </div>
  );
}

export default Cards;
