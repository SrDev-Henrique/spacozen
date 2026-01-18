import { cubicBezier } from "motion/react";

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
