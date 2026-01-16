import { cubicBezier } from "motion/react";

export const navigationMenuVariants = {
  initial: {
    left: "0%",
    top: "0rem",
    transform: "translateX(0%)",
    maxWidth: "999rem",
    width: "100%",
    height: "100%",
  },
  animate: {
    left: "50%",
    top: "1rem",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "42rem",
    height: "4rem",
    transition: {
      delay: 1,
      duration: 1,
      ease: cubicBezier(0.215, 0.61, 0.355, 1),
    },
  },
};

export const logoVariants = {
    initial: {
        scale: 3.5,
        top: "clamp(45vh, 5vh, 25rem)",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    animate: {
        scale: 1,
        top: "0rem",
        left: "clamp(0.5rem, 5vw, 1rem)",   
        transform: "translate(0%, 0%)",
        transition: {
            delay: 1.5,
            duration: 1,
            ease: cubicBezier(0.215, 0.61, 0.355, 1),
        }
    }
}
