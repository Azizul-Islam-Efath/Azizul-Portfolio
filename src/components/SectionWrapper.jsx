import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SectionWrapper({ children }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 80,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
  <div
    ref={ref}
    className="relative will-change-transform"
    style={{
      transformOrigin: "top center",
    }}
  >
    {children}
  </div>
);
}