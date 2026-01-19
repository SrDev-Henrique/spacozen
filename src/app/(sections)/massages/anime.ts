import { cubicBezier } from "motion/react";

export const knowMoreVariants = {
  initial: {
    bottom: "1rem",
    width: "min(100%, 9.75rem)",
    height: "min(100%, 2.25rem)",
    backgroundColor: "oklch(0.465 0.147 24.9381)",
    borderRadius: "2.5rem",
    transition: {
      duration: 0.7,
      width: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      bottom: { type: "spring", visualDuration: 0.3, bounce: 0.15 },
    },
  },
  animate: {
    bottom: "0",
    width: "min(100%, 26rem)",
    height: "min(100%, 14rem)",
    backgroundColor: "oklch(0.2178 0 0)",
    borderRadius: "2rem",
    transition: {
      duration: 0.7,
      width: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      height: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      borderRadius: { type: "spring", visualDuration: 0.7, bounce: 0.15 },
      bottom: { type: "spring", visualDuration: 0.3, bounce: 0.15 },
    },
  },
};
