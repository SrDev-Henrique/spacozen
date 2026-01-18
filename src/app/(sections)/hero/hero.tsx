"use client";

import { RiStarFill } from "@remixicon/react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { RelaxedIcon } from "@/components/icons/relaxed-icon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { fadeUpBlurVariants, revealLeftClipVariants } from "./anime";

const popularMassages = ["Nuru", "Vivência", "Mix Tântrico"];

export function Hero() {
  return (
    <div className="relative h-dvh min-h-[660px] w-full">
      <div className="relative h-full w-full brightness-55">
        <Image
          src="/images/hero.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bmd:pt-42 pt-22">
        <div className="mx-auto flex h-full w-full max-w-[1320px] bmd:flex-row flex-col bmd:items-end justify-between p-4 lg:px-6">
          <div className="flex h-full flex-col items-start justify-end bmd:justify-between gap-4 bmd:pb-0 pb-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-muted">
                  Sua dose de bem-estar
                </h3>
                <h1 className="bmd:max-w-2xl max-w-sm font-bold text-5xl text-primary-foreground lg:text-7xl">
                  A massagem muda o seu dia a dia
                </h1>
              </div>
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
            </div>
            <div className="bmd:flex hidden items-center gap-4 rounded-full bg-foreground/30 p-2">
              <p className="font-semibold bmd:text-base text-primary-foreground text-xs">
                Mais populares
              </p>
              <div className="flex items-center gap-2">
                {popularMassages.map((massage) => (
                  <Button
                    key={massage}
                    className="cursor-pointer rounded-3xl bg-transparent bmd:py-6 py-4 text-primary-foreground uppercase backdrop-blur-sm backdrop-brightness-155 hover:bg-transparent hover:brightness-115"
                  >
                    <Calendar />
                    {massage}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-fit space-y-4 self-end rounded-2xl p-4 backdrop-blur-sm backdrop-brightness-75">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Avatar
                      key={index.toString()}
                      className="not-first:-ms-2 bmd:size-10 border-2 border-muted/30"
                    >
                      <AvatarImage
                        src={`/images/avatar-${index}.${index === 0 ? "jpg" : "webp"}`}
                      />
                    </Avatar>
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
                    className="cursor-pointer rounded-3xl bg-card/12 bmd:py-6 py-4 text-primary-foreground uppercase hover:bg-transparent"
                  >
                    <Calendar />
                    {massage}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
