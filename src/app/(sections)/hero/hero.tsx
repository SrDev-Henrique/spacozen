"use client";

import { RiStarFill } from "@remixicon/react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  fadeUpBlurVariants,
  heroContainerClipVariants,
  opacityVariants,
} from "./anime";

const popularMassages = ["Nuru", "Vivência", "Mix Tântrico"];

export function Hero() {
  return (
    <motion.div
      variants={heroContainerClipVariants}
      initial="initial"
      animate="animate"
      className="relative h-screen min-h-[660px] w-full overflow-hidden rounded-b-4xl"
    >
      <div className="relative h-full w-full overflow-hidden brightness-55">
        <Image
          src="/images/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute top-0 right-0 left-0 h-dvh bmd:pt-42 pt-22">
        <div className="mx-auto flex h-full w-full max-w-[1320px] bmd:flex-row flex-col bmd:items-end justify-between p-4 lg:px-6">
          <div className="flex h-full flex-col items-start justify-end bmd:justify-between gap-4 bmd:pb-0 pb-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <motion.h3
                  variants={fadeUpBlurVariants}
                  initial="initial"
                  animate="animate"
                  custom={{ delay: 1, opacity: 1 }}
                  className="font-semibold text-lg text-muted"
                >
                  Sua dose de bem-estar
                </motion.h3>
                <motion.h1
                  variants={fadeUpBlurVariants}
                  initial="initial"
                  animate="animate"
                  custom={{ delay: 1.2, opacity: 1 }}
                  className="bmd:max-w-2xl max-w-sm font-bold text-4xl text-primary-foreground sm:text-5xl lg:text-7xl"
                >
                  A massagem muda o seu dia a dia
                </motion.h1>
              </div>
              <motion.div
                variants={fadeUpBlurVariants}
                initial="initial"
                animate="animate"
                custom={{ delay: 1.4, opacity: 1 }}
                className="w-fit"
              >
                <Button
                  variant="default"
                  className="rounded-full bmd:py-7 py-6 pe-1 uppercase"
                  asChild
                >
                  <Link href="/agendamento">
                    Agendar horário
                    <div className="rounded-full bg-foreground bmd:p-3 p-2">
                      <Calendar className="size-4 md:size-5" />
                    </div>
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={opacityVariants}
              initial="initial"
              animate="animate"
              custom={1.6}
              className="bmd:flex hidden items-center gap-4 rounded-full bg-foreground/30 p-2"
            >
              <p className="font-semibold bmd:text-base text-primary-foreground text-xs">
                Mais populares
              </p>
              <div className="flex items-center gap-2 overflow-hidden">
                {popularMassages.map((massage, index) => (
                  <motion.div
                    key={massage}
                    variants={fadeUpBlurVariants}
                    initial="initial"
                    animate="animate"
                    custom={{ delay: 1.8 + index * 0.1, opacity: 1 }}
                  >
                    <Button className="cursor-pointer rounded-3xl bg-card/12 bmd:py-6 py-4 text-primary-foreground uppercase hover:bg-card/17">
                      <Calendar />
                      {massage}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="animate"
            custom={2}
            className="w-fit space-y-4 self-end rounded-2xl p-4 backdrop-blur-sm backdrop-brightness-75"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <motion.div
                      key={index.toString()}
                      variants={fadeUpBlurVariants}
                      initial="initial"
                      animate="animate"
                      custom={{ delay: 2.2 + index * 0.1, opacity: 1 }}
                      className="not-first:-ms-2 w-fit"
                    >
                      <Avatar className="bmd:size-10 border-2 border-muted/30">
                        <AvatarImage
                          src={`/images/avatar-${index}.${index === 0 ? "jpg" : "webp"}`}
                        />
                      </Avatar>
                    </motion.div>
                  ))}
                </div>
                <p className="text-nowrap rounded-full bg-card/12 p-2 font-semibold bmd:text-base text-primary-foreground text-sm">
                  Mais 250
                </p>
                <p className="bmd:text-base text-primary-foreground text-sm">
                  Reverenciada!
                </p>
              </div>
              <p className="max-w-[300px] bmd:text-base text-muted text-xs">
                A massagem me ajudou a relaxar e me sentir mais energizado.
              </p>
              <Separator className="bmd:block hidden bg-card/20" />
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-start">
                  <p className="bmd:text-8xl text-5xl text-primary-foreground">
                    4.9
                  </p>
                  <RiStarFill className="size-4 text-yellow-500" />
                </div>
                <p className="bmd:text-lg text-muted text-sm">( Avaliações )</p>
              </div>
            </div>
            <Separator className="bmd:hidden bg-card/20" />
            <div className="flex bmd:hidden items-center gap-4 rounded-full">
              <p className="font-semibold bmd:text-base text-primary-foreground text-xs">
                Mais populares
              </p>
              <div className="flex items-center gap-2">
                {popularMassages.slice(0, 2).map((massage) => (
                  <Button
                    key={massage}
                    className="cursor-pointer rounded-3xl bg-card/12 bmd:py-6 py-4 text-primary-foreground uppercase hover:bg-card/17"
                  >
                    <Calendar />
                    {massage}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
