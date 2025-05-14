"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await signIn("google");
    setLoading(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <header className="w-full shadow-md bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-50" style={{ backgroundColor: "#ffffff4a" }}>
      <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo e Nome */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo-branca.png"
              alt="Logo Busca Creci"
              width={40}
              height={40}
            />
          </Link>
          <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
            Busca Creci
          </span>
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center gap-4 flex-wrap justify-end">
          {/* Exibir nome do usuário logado ou botão de login */}
          {session ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{session.user?.name}</span>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white hover:bg-gray-100 font-medium transition"
              >
                {loading ? "Saindo..." : "Sair"}
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              disabled={loading}
              aria-label="Login com Google"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white hover:bg-gray-100 font-medium transition"
            >
              {loading ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    d="M4 12a8 8 0 0 1 8-8"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533.5 544.3"
                >
                  <path
                    d="M533.5 278.4c0-17.5-1.4-35-4.3-52.2H272v98.8h146.9c-6.3 34-25.3 62.7-53.9 82l87 67c50.7-46.8 80.5-115.7 80.5-195.6z"
                    fill="#4285F4"
                  />
                  <path
                    d="M272 544.3c72.6 0 133.6-24 178.2-65.5l-87-67c-24.1 16.3-54.9 25.7-91.2 25.7-70.1 0-129.6-47.3-150.8-111.1H31.4v69.8C76.7 483.8 167.8 544.3 272 544.3z"
                    fill="#34A853"
                  />
                  <path
                    d="M121.2 326.4c-5.7-16.8-8.9-34.8-8.9-53.2s3.2-36.4 8.9-53.2v-69.8H31.4C11.3 186.4 0 229.6 0 273.2c0 43.6 11.3 86.8 31.4 126.4l89.8-69.8z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M272 107.7c39.5 0 74.9 13.6 102.8 40.4l77.1-77.1C405.6 25.2 344.6 0 272 0 167.8 0 76.7 60.5 31.4 146.4l89.8 69.8C142.4 155 201.9 107.7 272 107.7z"
                    fill="#EA4335"
                  />
                </svg>
              )}
              <span className="hidden sm:block cursor-pointer">{loading ? "Carregando..." : "Entrar com Google"}</span>
            </button>
          )}

          {/* Botão Doar com símbolo de reais e fundo branco */}
          <Link
            href="https://nubank.com.br/cobrar/1ac1f/67b71b4b-1710-4ff8-aed6-2c8e2100e8db"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-lg font-medium transition"
          >
            <span className="mr-2">R$</span>
            <span className="hidden sm:block">Doar</span>
          </Link>

          {/* Botão GitHub com ícone branco */}
          <Link
            href="https://github.com/19950512/buscacreci"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-lg font-medium transition"
          >
            <Image
              width={20}
              height={20}
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            <span className="hidden sm:block">GitHub</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
