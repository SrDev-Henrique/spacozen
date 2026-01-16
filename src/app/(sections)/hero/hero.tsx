"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { RelaxedIcon } from "@/components/icons/relaxed-icon";
import { Button } from "@/components/ui/button";
import { fadeUpBlurVariants, revealLeftClipVariants } from "./anime";

export function Hero() {
  return (
    <div className="relative mx-auto flex h-fit min-h-[600px] w-full items-center justify-center">
      <div className="relative z-50 mx-auto flex h-[60vh] min-h-[400px] w-full max-w-2xl items-center justify-center pt-65 sm:pt-26">
        <div className="flex size-full flex-col items-center justify-center gap-6 pt-6">
          <motion.div
            className="opacity-55"
            custom={1.8}
            variants={fadeUpBlurVariants}
            initial="initial"
            animate="animate"
          >
            <RelaxedIcon width={40} height={40} />
          </motion.div>
          <motion.h1
            className="max-w-sm text-center font-bold text-[1.575rem] xs:text-[1.765rem] uppercase leading-relaxed sm:max-w-md sm:text-3xl md:max-w-none md:text-4xl lg:text-5xl"
            custom={2}
            variants={fadeUpBlurVariants}
            initial="initial"
            animate="animate"
          >
            A melhor casa de massagem de Campinas
          </motion.h1>
          <motion.p
            className="max-w-sm text-center text-[1rem] text-muted-foreground md:max-w-none md:text-base lg:text-lg"
            custom={2.2}
            variants={fadeUpBlurVariants}
            initial="initial"
            animate="animate"
          >
            Respire fundo, deixe nossas mãos devolverem seu equilíbrio e leve
            consigo uma nova leveza.
          </motion.p>
          <motion.div
            className="mx-auto flex w-full max-w-sm justify-center gap-6"
            custom={2.4}
            variants={fadeUpBlurVariants}
            initial="initial"
            animate="animate"
          >
            <Button className="uppercase" variant="secondary" asChild>
              <Link href="/massagens">Massagens</Link>
            </Button>
            <Button className="uppercase" asChild>
              <Link href="/agendamento">Agendar horário</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="floating absolute top-52 left-0 w-fit opacity-75 md:top-30 md:left-4">
        <motion.div
          variants={revealLeftClipVariants}
          initial="initial"
          animate="animate"
          custom={2.6}
          className="relative aspect-square w-[22vw] min-w-[100px] max-w-[200px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/bed-front.webp"
            alt="Relaxed Icon"
            fill
            className="size-full object-cover object-center"
          />
        </motion.div>
      </div>
      <div className="floating floating-delay absolute top-40 right-0 w-fit opacity-75 md:top-26 md:right-4">
        <motion.div
          variants={revealLeftClipVariants}
          initial="initial"
          animate="animate"
          custom={2.8}
          className="relative aspect-square w-[22vw] min-w-[100px] max-w-[200px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/console.webp"
            alt="Relaxed Icon"
            fill
            className="size-full object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
  );
}
