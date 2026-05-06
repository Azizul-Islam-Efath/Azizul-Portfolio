import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={ref} className="relative h-[250vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-16">
          {children}
        </motion.div>
      </div>
    </section>
  );
}