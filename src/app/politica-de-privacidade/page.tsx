// src/pages/privacidade.tsx
import Link from "next/link";
import { FC } from "react";

const Privacidade: FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 relative">
    <main className="container w-full max-w-screen-lg mx-auto px-6 py-4 mt-20">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Política de Privacidade
      </h1>

      <section className="mb-10">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O <strong>Busca CRECI</strong> respeita sua privacidade. Nosso compromisso é garantir a transparência sobre o uso de informações consultadas e os dados técnicos envolvidos no funcionamento do serviço.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Armazenamento Temporário</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Quando um CRECI é consultado, os dados públicos retornados são armazenados temporariamente por até 3 meses para evitar sobrecarga nas fontes oficiais e garantir performance na entrega. A data da última atualização é exibida ao usuário.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          Nenhuma informação é vendida ou compartilhada com terceiros.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Cookies e Informações Técnicas</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Utilizamos cookies estritamente necessários para funcionalidades básicas e segurança. Registramos IP, navegador e data/hora da consulta unicamente para auditoria e combate a abusos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Remoção de Dados</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Caso deseje que uma consulta armazenada temporariamente seja removida antes do prazo padrão, entre em contato conosco através do Discord <Link href="https://discord.gg/B4pXbCd22b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">aqui</Link>.
        </p>
      </section>
    </main>
  </div>
);

export default Privacidade;
