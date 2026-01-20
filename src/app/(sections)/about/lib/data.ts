import type { ComponentType } from "react";
import { Alternate } from "@/components/icons/alternate";
import { Heart } from "@/components/icons/heart";
import { Measure } from "@/components/icons/measure";

type AboutItem = {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number }>;
  iconSize: number;
  iconBg: string;
  iconWrapperClass?: string;
};

export const aboutItems: AboutItem[] = [
  {
    id: 1,
    title: "Massagem Sensorial Personalizada",
    description:
      "Sessões privadas criadas para despertar os sentidos: toque fluido, ritmo compassado e ambientação íntima. Cada sessão é adaptada ao seu desejo para um relaxamento que se transforma em prazer suave.",
    icon: Measure,
    iconSize: 48,
    iconBg: "bg-purple",
    iconWrapperClass: "w-15",
  },
  {
    id: 2,
    title: "Técnicas Sensoriais Exclusivas",
    description:
      "Movimentos delicados, óleo aquecido e transições harmoniosas — técnicas selecionadas para amplificar a sensibilidade e prolongar o efeito sensual, sempre com profissionalismo e discrição.",
    icon: Alternate,
    iconSize: 40,
    iconBg: "bg-green",
    iconWrapperClass: "min-w-12",
  },
  {
    id: 3,
    title: "Conexão e Entrega Corporal",
    description:
      "Um convite à presença: respiração guiada, toques que aproximam corpo e mente e um ambiente íntimo pensado para você se entregar e redescobrir o prazer do toque.",
    icon: Heart,
    iconSize: 48,
    iconBg: "bg-blue",
    iconWrapperClass: "w-15",
  },
];
