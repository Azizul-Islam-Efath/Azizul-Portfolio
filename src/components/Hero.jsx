import { useEffect, useRef } from "react";
import { Typewriter } from "../utils";
import gsap from "gsap";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="relative z-10 text-center max-w-5xl">

        <p className="hero-item text-[#F3DDD0] uppercase tracking-[0.3em] text-sm mb-6">
          Hello, It's Me 👋
        </p>

        <h1 className="hero-item text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
          MD. AZIZUL
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#F3DDD0]">
            ISLAM
          </span>
        </h1>

        <p className="hero-item text-lg md:text-xl text-white/75 mt-8 mb-10">
          <Typewriter
            words={[
              "Software Developer",
              "Problem Solver",
              "Networking Enthusiast",
              "Open Source Contributor",
            ]}
          />
        </p>

        <div className="hero-item flex flex-col sm:flex-row gap-5 justify-center">

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-full bg-[#E8C7B6] text-black font-semibold hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}