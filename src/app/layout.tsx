"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "./contexts/UserContext";
import { SessionProvider } from "next-auth/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>BuscaCRECI - Consulta de Corretores e Imobiliárias</title>
        <meta name="description" content="Encontre rapidamente informações de registro de corretores e imobiliárias em todo o Brasil. Simples, rápido e confiável." />
        <meta name="keywords" content="CRECI, Consulta CRECI, Corretores, Imobiliárias, Registro CRECI" />
        <meta name="author" content="BuscaCRECI" />
        <meta property="og:title" content="BuscaCRECI - Consulta de Corretores e Imobiliárias" />
        <meta property="og:description" content="Encontre informações de registro de corretores e imobiliárias no Brasil de forma simples e rápida." />
        <meta property="og:image" content="https://buscacreci.com.br/logo.png" />
        <meta property="og:url" content="https://buscacreci.com.br" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>

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
