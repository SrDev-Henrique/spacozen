import { About } from "./(sections)/about/about";
import { Hero } from "./(sections)/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto w-full max-w-[1320px] space-y-20 px-6 md:px-0">
        <About />
      </div>
    </main>
  );
}
