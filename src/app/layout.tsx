import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenu } from "@/components/navigation-menu/navigation-menu";
import { LenisProvider } from "@/contexts/lenis-context";

export const metadata: Metadata = {
  title: "Casa de Massagem Spacozen",
  description:
    "Spaçozen é a melhor casa de massagem de Campinas, oferecemos massagens relaxantes e terapêuticas para você se sentir bem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link
        rel="preload"
        href="/fonts/bodoni-moda-v28-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/raleway-v37-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/source-sans-3-v19-latin-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className="antialiased">
        <NavigationMenu />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
