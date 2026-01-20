type PostItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const posts: PostItem[] = [
  {
    id: 1,
    title: "O papel da massagem na redução da ansiedade e estresse",
    description:
      "Descubra como a massagem pode ser uma poderosa aliada para combater a ansiedade e o estresse, promovendo o relaxamento físico e mental.",
    image: "/images/post-0.jpeg",
  },
  {
    id: 2,
    title: "O poder da massagem para o sistema imunológico",
    description:
      "Como a massagem regular pode fortalecer o sistema imunológico e promover a saúde a longo prazo.",
    image: "/images/post-1.jpeg",
  },
  {
    id: 3,
    title: "A conexão entre massagem e a saúde digestiva",
    description:
      "Explore como as técnicas de massagem podem ajudar a melhorar a digestão e aliviar desconfortos gastrointestinais.",
    image: "/images/post-2.jpeg",
  },
  {
    id: 4,
    title: "Massagem para recuperação pós-treino: benefícios para atletas",
    description:
      "Explore como a massagem pode acelerar a recuperação muscular e aliviar a dor após o exercício físico.",
    image: "/images/post-3.jpeg",
  },
];
