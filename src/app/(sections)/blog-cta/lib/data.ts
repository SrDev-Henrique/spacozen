type PostItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const posts: PostItem[] = [
  {
    id: 1,
    title: "Nuru: a técnica do toque pele-a-pele e como é feita com segurança",
    description:
      "Entenda a origem do Nuru, o uso do gel apropriado e como garantir higiene, conforto e limites claros durante a sessão.",
    image: "/images/post-0.jpeg",
  },
  {
    id: 2,
    title: "Vivência: dar e receber — a prática da massagem interativa",
    description:
      "Explicamos a vivência mútua, suas dinâmicas de troca consciente, e como a prática estimula presença e intimidade sem pressa.",
    image: "/images/post-1.jpeg",
  },
  {
    id: 3,
    title: "Consentimento, limites e segurança em massagens sensuais",
    description:
      "Guia prático sobre comunicação, limites, higiene e sinais de profissionalismo que você deve exigir no seu estúdio.",
    image: "/images/post-2.jpeg",
  },
  {
    id: 4,
    title: "Preparação para a sessão: higiene, vestimenta e o que esperar",
    description:
      "Dicas claras para o cliente chegar preparado e confortável — do banho às expectativas sobre a sessão.",
    image: "/images/post-3.jpeg",
  },
];
