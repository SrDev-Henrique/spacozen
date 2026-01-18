import { cubicBezier } from "motion/react";

export const navVariants = {
  initial: {
    opacity: 0,
    filter: "blur(10px) backdrop-blur(0px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px) backdrop-blur(10px)",
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};
