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

export const menuVariants = {
  initial: {
    opacity: 1,
    width: "min(83vw, 10.75rem)",
    height: "min(50vh, 3.625rem)",
    borderRadius: "2rem",
    backgroundColor: "oklch(0.2178 0 0 / 0.36)",
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
  animate: (custom: boolean) => ({
    opacity: 1,
    width: custom ? "min(96vw, 31.5rem)" : "min(95.7vw, 46rem)",
    height: "min(80vh, 27.5rem)",
    borderRadius: "1.5rem",
    backgroundColor: "oklch(0.2178 0 0 / 1)",
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  }),
};
