"use client";

import { RiArrowLeftLine } from "@remixicon/react";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RelaxedIcon } from "@/components/icons/relaxed-icon";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { knowMoreVariants } from "./anime";
import { massages } from "./lib/data";

export function Massages() {
  const [knowMore, setKnowMore] = useState<number>(0);
  return (
    <div className="min-h-screen w-full px-4 lg:px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="w-fit">
          <h1 className="text-center font-bold bmd:text-4xl text-3xl text-primary-foreground lg:text-5xl">
            Nossos Estilos de Massagem
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {massages.map((massage, index) => (
            <div
              key={massage.id}
              className={cn(
                "aspect-15/16 max-h-[450px] w-full overflow-hidden rounded-xl bg-foreground",
                index === 3 && "lg:col-span-3 lg:aspect-video",
              )}
            >
              <div className="relative size-full p-4 py-6">
                <div
                  className={cn(
                    "relative z-2 flex size-full pt-[30%] lg:pt-[25%]",
                    index === 3 && "lg:pt-[10%]",
                  )}
                >
                  <div className="absolute top-0 flex w-full items-center justify-between">
                    <div className="h-13 w-fit flex-center rounded-full bg-primary/86 px-4 backdrop-blur-sm">
                      <p className="text-primary-foreground text-sm">
                        {massage.name}
                      </p>
                    </div>
                    <Tooltip>
                      <TooltipTrigger>
                        <Button
                          asChild
                          className="size-13 rounded-full bg-card/12 backdrop-blur-sm hover:bg-card/17"
                        >
                          <Link href={`/massagens/${massage.name}`}>
                            <RiArrowLeftLine className="size-6 rotate-130" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver detalhes</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative flex size-full flex-col items-center justify-end gap-10 overflow-hidden pb-4">
                    <p
                      className={cn(
                        "max-w-sm rounded-full bg-foreground px-2.5 py-2 text-center font-bold text-muted text-sm transition-opacity delay-500 duration-300",
                        knowMore === massage.id && "opacity-0 delay-0",
                      )}
                    >
                      {massage.intro}
                    </p>
                    <div className="relative z-2 w-fit">
                      <Button
                        onClick={() =>
                          setKnowMore((prev) =>
                            prev === massage.id ? 0 : massage.id,
                          )
                        }
                        className="rounded-full"
                      >
                        <RelaxedIcon width={20} height={20} />
                        {knowMore === massage.id
                          ? "Mostrar Menos"
                          : "Mostrar Mais"}
                        <RelaxedIcon width={20} height={20} />
                      </Button>
                    </div>
                    <motion.div
                      variants={knowMoreVariants}
                      initial="initial"
                      animate={knowMore === massage.id ? "animate" : "initial"}
                      className="-translate-x-1/2 absolute bottom-4 left-1/2 h-9 w-35"
                    >
                      <div
                        className={cn(
                          "flex-center flex-col gap-2 p-4 opacity-0 transition-opacity delay-0 duration-200",
                          knowMore === massage.id &&
                            "opacity-100 delay-400 duration-300",
                        )}
                      >
                        <Button className="rounded-full pe-2">
                          Agendar
                          <div className="rounded-full bg-foreground p-2">
                            <Calendar className="size-4" />
                          </div>
                        </Button>
                        <p className="text-center font-bold text-muted text-sm">
                          {massage.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute inset-0 brightness-85">
                  <Image
                    src={`/images/massage-${index}.webp`}
                    alt={`Massage ${index}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
