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
    <div className="w-full space-y-10">
      <div className="text-center">
        <h1 className="mx-auto w-fit rounded-full bg-accent/80 p-2 font-bold text-sm uppercase md:text-sm">
          Conheça-nos
        </h1>
      </div>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
        <div className="relative col-span-1 overflow-hidden rounded-4xl border bg-accent/80">
          <div className="-translate-x-1/2 absolute top-4 left-1/2 z-10 rounded-full p-2 backdrop-blur-sm backdrop-brightness-65">
            <p className="text-card text-sm">Massoterapeuta</p>
          </div>
          <div className="relative aspect-150/200 w-full opacity-90">
            <Image
              src="/images/massoterapeuta.jpeg"
              alt="Massoterapeuta"
              fill
              className="relative z-10 object-cover object-center"
            />
          </div>
        </div>
        <div className="col-span-1 rounded-4xl border bg-accent/50 p-6">
          <div className="flex w-full flex-col justify-between gap-4">
            <p className="font-semibold text-[1.25rem] xs:text-[1.375rem] uppercase leading-relaxed sm:text-xl">
              Agendamento direto e prático pelo whatsapp
            </p>
            <div className="relative pb-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
