import { Hero } from "./(sections)/hero/hero";

export default function Home() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl space-y-20 px-6 md:px-0">
        <Hero />
      </div>
    </main>
  );
}
