import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let current = 0;
    let target = 0;

    const ease = 0.08;

    const smooth = () => {
      target = window.scrollY;
      current += (target - current) * ease;

      document.body.style.transform = `translateY(-${current}px)`;

      requestAnimationFrame(smooth);
    };

    smooth();

    return () => {
      document.body.style.transform = "translateY(0)";
    };
  }, []);

  return null;
}