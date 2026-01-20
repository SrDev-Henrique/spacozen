import { Calendar } from "lucide-react";
import Image from "next/image";
import { Like } from "@/components/icons/like";
import { Button } from "@/components/ui/button";
import { aboutItems } from "./lib/data";

export function About() {
  return (
    <div className="h-fit w-full px-4 lg:px-6">
      <div className="w-full space-y-8">
        <h1 className="bmd:text-center font-bold bmd:text-4xl text-3xl text-primary-foreground lg:text-5xl">
          Descubra Mais Sobre a Nossa Abordagem
        </h1>
        <div className="flex w-full bmd:flex-row flex-col bmd:items-center bmd:justify-between gap-6 xl:gap-10">
          <div className="grid grid-cols-1 gap-6">
            {aboutItems.map(
              ({
                id,
                title,
                description,
                icon: Icon,
                iconBg,
                iconSize,
                iconWrapperClass,
              }) => (
                <div className="flex items-start gap-4" key={id}>
                  <div
                    className={`aspect-square flex-center rounded-lg ${iconWrapperClass ?? "w-15"} ${iconBg}`}
                  >
                    <Icon size={iconSize} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl text-card leading-tight">
                      {title}
                    </h3>
                    <p className="text-muted-bright-foreground">{description}</p>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="relative aspect-square bmd:aspect-square max-h-[430px] w-full overflow-hidden rounded-xl">
            <Image
              alt="Massagens sob medida oferecida pelo SpaçoZen"
              src="/images/about.jpg"
              fill
              className="object-cover object-center"
            />
            <div className="absolute right-4 bottom-4 w-75 rounded-2xl bg-foreground/36 backdrop-blur-sm">
              <div className="flex h-full flex-col justify-between gap-8 p-4">
                <div className="w-fit rounded-full bg-card/12 p-4">
                  <Like size={24} color="white" />
                </div>
                <div className="space-y-4">
                  <p className="w-full text-primary-foreground">
                    Cada sessão é um convite à entrega, respeitando seus limites
                    e despertando sensações através de uma experiência sensorial
                    completa.
                  </p>
                  <Button className="cursor-pointer rounded-full bg-foreground/56 py-6 hover:bg-foreground/76">
                    Agendar horário
                    <div className="rounded-full bg-foreground p-2">
                      <Calendar size={24} />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
