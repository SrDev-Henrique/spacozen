import { About } from "./(sections)/about/about";
import { BlogCta } from "./(sections)/blog-cta/blog-cta";
import { Hero } from "./(sections)/hero/hero";
import { Massages } from "./(sections)/massages/massages";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto my-20 w-full max-w-[1320px] space-y-20">
        <Massages />
        <About />
      </div>
      <BlogCta />
    </main>
  );
}
