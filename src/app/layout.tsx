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
    <html lang="pt-BR" className="scrollbar-hide">
      <link
        rel="preload"
        href="/fonts/nunito-v32-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/roboto-v50-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/roboto-v50-latin-600.woff2"
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
