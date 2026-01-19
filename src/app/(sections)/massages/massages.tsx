import Image from "next/image";

export function Massages() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center gap-6">
        <div className="w-fit">
          <h3 className="font-bold bmd:text-3xl text-xl lg:text-4xl">
            Nossos Estilos de Massagem
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index.toString()}
              className="aspect-square w-full rounded-xl bg-foregroud p-4"
            >
              <div className="size-full rounded-xl bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
