// app/layout.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "./contexts/UserContext";
import { SessionProvider } from "next-auth/react";

// Fontes
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// SEO Básico
/* const metadata: Metadata = {
  title: "BuscaCRECI - Consulta de Corretores e Imobiliárias",
  description: "Encontre rapidamente informações de registro de corretores e imobiliárias em todo o Brasil. Simples, rápido e confiável.",
  keywords: "CRECI, Consulta CRECI, Corretores, Imobiliárias, Registro CRECI",
  authors: [{ name: "BuscaCRECI", url: "https://buscacreci.com.br" }],
  openGraph: {
    title: "BuscaCRECI",
    description: "Consulta de registro de corretores e imobiliárias.",
    url: "https://buscacreci.com.br",
    siteName: "BuscaCRECI",
    images: [
      {
        url: "https://buscacreci.com.br/og-image.png", // opcional: se quiser uma imagem de compartilhamento
        width: 1200,
        height: 630,
        alt: "BuscaCRECI",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: "index, follow",
  metadataBase: new URL("https://buscacreci.com.br"),
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white-200 text-zinc-900`}>
        <SessionProvider>
          <Header />
          <UserProvider>{children}</UserProvider>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
