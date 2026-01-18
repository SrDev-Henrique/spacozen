"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fadeUpBlurVariants } from "@/app/(sections)/hero/anime";
import { cn } from "@/lib/utils";
import { RelaxedIcon } from "../icons/relaxed-icon";
import { Button } from "../ui/button";
import { navVariants } from "./anime";

export function NavigationMenu() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>("estilos");

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1400);
  }, []);

  const navList = ["estilos", "sobre nós", "ambiente", "faq", "review"];
  return (
    <motion.div
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="-translate-x-1/2 fixed top-4 left-1/2 z-100 flex w-[92%] max-w-[1320px] justify-between px-4 sm:px-6 md:w-full"
    >
      <div className="relative w-fit flex-center">
        <Link href="/">
          <RelaxedIcon width={42} height={42} />
        </Link>
      </div>

      <div className="w-full max-w-2xl">
        <nav className="flex h-14.5 w-full items-center overflow-hidden rounded-full bg-foreground/26 backdrop-blur-sm transition-all duration-500">
          {navList.map((item) => (
            <Link
              href={`/${item}`}
              key={item}
              className={cn(
                "h-full w-full flex-center rounded-full font-semibold text-background uppercase transition-all duration-500",
                activeLink === item && "bg-primary",
              )}
              onClick={() => setActiveLink(item)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      <motion.div
        variants={fadeUpBlurVariants}
        custom={{ delay: 1.8, opacity: 1 }}
        initial="animate"
        animate="animate"
        className="flex items-center gap-4 py-2"
      >
        <Button
          variant="outline"
          size="sm"
          className="h-full rounded-full text-xs uppercase sm:text-sm"
          asChild
        >
          <Link href="/massagens">Massagens</Link>
        </Button>
        <Button
          size="sm"
          className="h-full rounded-full text-xs uppercase sm:text-sm"
          asChild
        >
          <Link href="/agendamento">Agendar</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
