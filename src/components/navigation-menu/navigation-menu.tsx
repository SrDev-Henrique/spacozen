"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fadeUpBlurVariants } from "@/app/(sections)/hero/anime";
import { cn } from "@/lib/utils";
import { Logo } from "../icons/logo";
import { Button } from "../ui/button";
import { logoVariants } from "./anime";

export function NavigationMenu() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1400);
  }, []);
  return (
    <nav
      className={cn(
        "-translate-x-1/2 fixed top-4 left-1/2 z-100 flex w-[92%] max-w-2xl rounded-4xl bg-background/50 px-4 backdrop-blur-sm transition-all duration-500 sm:px-6 md:w-full lg:px-8",
        isLoaded && "backdrop-brightness-98",
      )}
    >
      <div className="flex min-h-20 w-full items-center justify-end">
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="absolute left-4 w-fit scale-85 sm:left-6 sm:scale-90 md:left-8"
        >
          <Link
            href="/"
            className={cn(
              "-mt-0.5 flex scale-300 flex-col items-center gap-2 transition-all duration-1000",
              isLoaded && "scale-85",
            )}
          >
            <Logo />
            <span
              className={cn(
                "text-sidebar-foreground uppercase opacity-0 transition-opacity delay-100 duration-1000",
                isMounted && "opacity-100",
              )}
            >
              Spacozen
            </span>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeUpBlurVariants}
          custom={{ delay: 1.8, opacity: 1 }}
          initial="initial"
          animate="animate"
          className="flex items-center gap-4"
        >
          <Button
            variant="outline"
            size="sm"
            className="text-xs uppercase sm:text-sm"
            asChild
          >
            <Link href="/massagens">Massagens</Link>
          </Button>
          <Button size="sm" className="text-xs uppercase sm:text-sm" asChild>
            <Link href="/agendamento">Agendar</Link>
          </Button>
        </motion.div>
      </div>
    </nav>
  );
}
