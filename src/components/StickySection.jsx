import { motion } from "framer-motion";

export default function StickySection({ children }) {
  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}