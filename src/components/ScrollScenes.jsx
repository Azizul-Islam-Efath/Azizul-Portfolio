import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScenes() {
  useEffect(() => {
    const sections = gsap.utils.toArray("section");

    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          scale: 0.96,
          y: 80,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return null;
}