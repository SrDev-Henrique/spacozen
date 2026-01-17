import { cubicBezier } from "framer-motion";

export const fadeUpBlurVariants = {
  initial: {
    y: 30,
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: ({ delay, opacity }: { delay: number, opacity: number }) => ({
    y: 0,
    opacity: opacity || 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: delay,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  }),
};

export const revealLeftClipVariants = {
  initial: {
    clipPath: "inset(0 100% 0 0)", // totalmente escondido
    opacity: 0,
  },
  animate: (delay: number) => ({
    clipPath: "inset(0 0% 0 0)", // revela da esquerda → direita
    opacity: 1,
    transition: {
      duration: 1.2,
      delay,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  }),
};