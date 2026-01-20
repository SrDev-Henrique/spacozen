import { Calendar } from "lucide-react";
import Image from "next/image";
import { Alternate } from "@/components/icons/alternate";
import { Heart } from "@/components/icons/heart";
import { Like } from "@/components/icons/like";
import { Measure } from "@/components/icons/measure";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="h-fit w-full px-4 lg:px-6">
      <div className="w-full space-y-8">
        <h1 className="bmd:text-center font-bold bmd:text-4xl text-3xl lg:text-5xl">
          Descubra Mais Sobre a Nossa Abordagem
        </h1>
        <div className="flex w-full bmd:flex-row flex-col bmd:items-center bmd:justify-between gap-6 xl:gap-10">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="aspect-square w-15 flex-center rounded-lg bg-purple">
                <Measure size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl leading-tight">
                  Massagens Sob Medida
                </h3>
                <p className="text-muted-foreground">
                  Nossas massagens são adaptadas para atender às suas
                  necessidades específicas, seja você um iniciante ou alguém com
                  experiência em massagens.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="aspect-square min-w-12 flex-center rounded-lg bg-green">
                <Alternate size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl leading-tight">
                  Técnicas Variadas
                </h3>
                <p className="text-muted-foreground">
                  Explore uma variedade de técnicas de massagem para enriquecer
                  sua experiência de bem-estar. Você será guiado através de
                  diferentes estilos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="aspect-square w-15 flex-center rounded-lg bg-blue">
                <Heart size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl leading-tight">
                  Conexão com o Corpo e a Mente
                </h3>
                <p className="text-muted-foreground">
                  Revitalize-se com o poder transformador da massagem. Nossas
                  sessões são ideais para quem busca aliviar tensões e renovar
                  as energias.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square bmd:aspect-square max-h-[430px] w-full overflow-hidden rounded-xl">
            <Image
              alt="Massagens sob medida oferecida pelo SpaçoZen"
              src="/images/about.webp"
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
                    Nossas sessões são adequadas para todos, oferecendo uma
                    abordagem holística ao bem-estar.
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
