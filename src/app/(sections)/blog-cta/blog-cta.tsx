"use client";

import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Arrow } from "@/components/icons/arrow";
import { Blog } from "@/components/icons/blog";
import { Quote } from "@/components/icons/quote";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useDimension } from "@/lib/use-dimension";
import { BlogCtaPostCards } from "./components/blog-cta-post-cards";
import { posts } from "./lib/data";

export function BlogCta() {
  const { width } = useDimension();

  return (
    <div className="relative h-fit w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/blog-2.webp"
          alt="Blog"
          fill
          className="object-cover object-center brightness-55"
          priority={true}
          placeholder="blur"
          blurDataURL="/images/blog-2.webp"
        />
      </div>
      <div className="relative z-2 mx-auto w-full max-w-[1320px] px-4 lg:px-6">
        <div className="flex min-h-screen flex-col justify-between gap-24 py-10">
          <div className="space-y-6">
            <div className="w-fit flex-center gap-2 rounded-full bg-foreground/46 px-2.5 py-2">
              <Blog size={24} color="white" />
              <h3 className="text-muted lg:text-lg">Blog</h3>
            </div>
            <h1 className="max-w-4xl font-bold bmd:text-4xl text-3xl text-primary-foreground lg:text-[2.6rem]">
              Onde Saúde, Bem-Estar e Conexão Com o Corpo e Mente se Encontram
              Com o Conhecimento
            </h1>
            <Button className="rounded-full bmd:py-7 py-6">
              <Link href="/blog" className="flex items-center gap-2">
                Ver Todos os Artigos
                <div className="-rotate-45 rounded-full bg-foreground p-2">
                  <Arrow size={32} color="white" />
                </div>
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-fit space-y-4 self-start rounded-2xl p-4 backdrop-blur-sm backdrop-brightness-75 lg:self-end">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={index.toString()}
                        className="not-first:-ms-2 w-fit"
                      >
                        <Avatar className="bmd:size-10 border-2 border-muted/30">
                          <AvatarImage
                            src={`/images/blog-avatar-${index}.webp`}
                          />
                        </Avatar>
                      </div>
                    ))}
                  </div>
                  <p className="text-nowrap rounded-full bg-card/12 p-2 font-semibold bmd:text-base text-primary-foreground text-sm">
                    Mais 100
                  </p>
                  <p className="bmd:text-base text-primary-foreground text-sm">
                    Revitalizadora!
                  </p>
                </div>
                <div className="space-y-2">
                  <Quote size={24} color="white" />
                  <p className="max-w-[300px] bmd:text-base text-muted text-xs">
                    A massagem, além de ser gostosa e me fazer sentir bem, ainda
                    me ajudou a melhorar minhas dores.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              {!isMobile && (
                <div className="flex items-center justify-center gap-6">
                  <div className="rotate-180 cursor-pointer rounded-full bg-card p-2 transition-all duration-300 hover:bg-card/80">
                    <Arrow size={26} color="oklch(0.2178 0 0)" />
                  </div>
                  <div className="cursor-pointer rounded-full bg-card p-2 transition-all duration-300 hover:bg-card/80">
                    <Arrow size={26} color="oklch(0.2178 0 0)" />
                  </div>
                </div>
              )}
              <div
                style={{
                  maskImage:
                    width && width < 740
                      ? "linear-gradient(to left, white 70%,transparent 100%)"
                      : "linear-gradient(to left, white 90%,transparent 100%)",
                }}
                className="scrollbar-hide flex h-full w-[calc(100%+1rem)] shrink-0 gap-3 overflow-x-auto bmd:ps-12 ps-24 lg:translate-x-[22%] lg:ps-22"
              >
                {posts.map((post) => (
                  <BlogCtaPostCards key={post.id} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
