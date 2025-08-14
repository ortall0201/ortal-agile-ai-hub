import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  direction?: "ltr" | "rtl";
}

export const PageTransition = ({ children, direction = "ltr" }: PageTransitionProps) => {
  const slideVariants = {
    initial: {
      x: direction === "ltr" ? 100 : -100,
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: direction === "ltr" ? -100 : 100,
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={slideVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};