import { cubicBezier, type Variants } from "framer-motion";

export const fadeUpBlurVariants = {
  initial: {
    y: 30,
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: ({ delay, opacity }: { delay?: number; opacity?: number }) => ({
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

export const fadeRightVariants = {
  initial: {
    opacity: 0,
    x: 20,
    scale: 0.8,
  },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 0.6 + custom * 0.1,
      duration: 0.4,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  }),
} satisfies Variants;

export const heroContainerClipVariants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(25% 50%, 75% 50%, 75% 100%, 25% 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      clipPath: {
        duration: 1,
        delay: 0.5,
        ease: cubicBezier(0.76, 0, 0.24, 1),
      },
      opacity: {
        duration: 1,
        ease: cubicBezier(0.76, 0, 0.24, 1),
      },
    },
  },
};

export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom,
      ease: cubicBezier(0.76, 0, 0.24, 1),
    },
  }),
};
