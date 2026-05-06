import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.08}
          className="flex gap-10 px-16 cursor-grab active:cursor-grabbing"
        >
          {children}
        </motion.div>

      </div>
    </section>
  );
}