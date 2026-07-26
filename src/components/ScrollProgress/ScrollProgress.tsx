import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
  fixed
  top-0
  left-0
  h-1
  w-full
  bg-gradient-to-r
  from-sky-400
  via-cyan-400
  to-blue-500
  origin-left
  z-[100]
"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;