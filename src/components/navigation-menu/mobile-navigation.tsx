import { MenuIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { fadeUpBlurVariants } from "@/app/(sections)/hero/anime";
import { useDimension } from "@/lib/use-dimension";
import { RelaxedIcon } from "../icons/relaxed-icon";
import { Button } from "../ui/button";
import { menuVariants, navVariants } from "./anime";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useDimension();
  return (
    <motion.div
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="fixed top-4 z-100 flex w-full items-center justify-between gap-4 rounded-b-3xl px-4"
    >
      <div className="relative h-14.5 flex-center gap-2 rounded-full px-4">
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          custom={width && width > 752}
          className="absolute top-0 left-0 flex h-14.5 w-43 items-start rounded-full bg-foreground/26 backdrop-blur-sm"
        >
          <div className="h-14.5 w-43 flex-center gap-2">
            <Link href="/">
              <RelaxedIcon width={38} height={38} />
            </Link>
            <Button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer bg-transparent text-base uppercase hover:bg-transparent"
            >
              Menu
              <MenuIcon className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeUpBlurVariants}
        custom={{ delay: 1.8, opacity: 1 }}
        initial="animate"
        animate="animate"
        className="flex h-14.5 items-center gap-4 overflow-hidden rounded-full bg-foreground/26 px-4 py-2 backdrop-blur-sm"
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
