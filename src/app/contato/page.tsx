// src/pages/contato.tsx
import { FC } from "react";

const Contato: FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
    <main className="container w-full max-w-screen-md mx-auto px-6 py-4 mt-20 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8">
        Fale Conosco
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Toda a comunicação com a equipe do <strong>Busca CRECI</strong> é feita exclusivamente via Discord.
      </p>

      <a
        href="https://discord.gg/B4pXbCd22b"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Entrar no Discord
      </a>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        Utilize o Discord para dúvidas, feedbacks, correções ou solicitações de remoção de dados.
      </p>
    </main>
  </div>
);

export default Contato;