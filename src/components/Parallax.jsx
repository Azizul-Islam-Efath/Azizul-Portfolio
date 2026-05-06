import { useScroll, useTransform, motion } from "framer-motion";

export default function Parallax({ children, speed = 0.3 }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}