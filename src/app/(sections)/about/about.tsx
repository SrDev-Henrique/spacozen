import Image from "next/image";

export function About() {
  const chatMessages = [
    {
      id: 1,
      divClassName:
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%] z-1 bg-accent rounded-xl p-4",
      message:
        "Olá, gostaria de agendar uma massagem relaxante para terça-feira às 14:00.",
      pClassName: "text-sm text-muted-foreground",
    },
    {
      id: 2,
      divClassName:
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] z-1 bg-accent rounded-xl p-4",
      message: "Claro, posso agendar para você. Qual o seu nome?",
      pClassName: "text-sm text-muted-foreground",
    },
    {
      id: 3,
      divClassName:
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] z-1 bg-accent rounded-xl p-4",
      message: "Meu nome é João.",
      pClassName: "text-sm text-muted-foreground",
    },
    {
      id: 4,
      divClassName:
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[50%] z-1 bg-accent rounded-xl p-4",
      message:
        "Certo, João. Seu agendamento foi confirmado para terça-feira às 14:00.",
      pClassName: "text-sm text-muted-foreground",
    },
  ];
  return (
    <div className="w-full space-y-10 rounded-4xl bg-accent/5">
      <div className="space-y-4 text-center">
        <h1 className="font-bold text-[1.575rem] xs:text-[1.765rem] uppercase leading-relaxed sm:max-w-md sm:text-3xl md:max-w-none md:text-4xl lg:text-5xl">
          O melhor do relaxamento
        </h1>
        <p className="mx-auto max-w-sm text-center text-[1rem] text-muted-foreground md:max-w-lg md:text-base lg:text-lg">
          Unimos o que há de melhor em massagens relaxantes e terapêuticas com
          técnicas modernas para oferecer o melhor para você.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-1 overflow-hidden rounded-4xl border bg-accent/50 p-6 lg:col-span-3">
          <div className="flex flex-col-reverse items-end gap-4 md:flex-row md:justify-between">
            <p className="font-semibold text-[1.25rem] xs:text-[1.375rem] uppercase leading-relaxed sm:text-2xl md:text-3xl">
              Massoterapeuta especializada
            </p>
            <div className="relative aspect-150/200 w-full max-w-[240px] opacity-90">
              <div className="-translate-x-[55%] -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square w-[135%] rounded-full bg-accent"></div>
              <Image
                src="/images/massoterapeuta.jpeg"
                alt="Massoterapeuta"
                fill
                className="relative z-10 rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-4xl border bg-accent/50 p-6 lg:col-span-2">
          <div className="flex w-full flex-col justify-between gap-4">
            <p className="font-semibold text-[1.25rem] xs:text-[1.375rem] uppercase leading-relaxed sm:text-xl">
              Atendimento mediante agendamento com no mínimo 24 horas de
              antecedência
            </p>
            <div className="relative pb-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
