import { Hero } from "./(sections)/hero/hero";
import { Massages } from "./(sections)/massages/massages";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto mt-20 w-full max-w-[1320px] space-y-20 px-6 md:px-0">
        <Massages />
      </div>
    </main>
  );
}
