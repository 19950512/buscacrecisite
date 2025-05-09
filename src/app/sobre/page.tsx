// src/pages/sobre.tsx
import { FC } from "react";

const Sobre: FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Sobre o Busca CRECI
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">O que é o Busca CRECI?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O <strong className="font-bold text-blue-600">Busca CRECI</strong> é uma API desenvolvida para facilitar a consulta de informações sobre corretores de imóveis registrados no CRECI (Conselho Regional de Corretores de Imóveis) em todo o Brasil. Este projeto nasceu da necessidade de centralizar e simplificar o acesso a dados sobre corretores, proporcionando uma solução rápida e eficiente para desenvolvedores e empresas do ramo imobiliário.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Como Funciona?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A API permite que você consulte informações sobre corretores de imóveis registrados no CRECI, facilitando a validação de profissionais no mercado imobiliário. É uma ferramenta útil para integrar em sistemas de busca de corretores, sites imobiliários e outras aplicações que necessitam dessa informação.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Como Contribuir?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          O <strong className="font-bold text-blue-600">Busca CRECI</strong> é um projeto open-source, e você pode contribuir de diversas formas:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>Reportando problemas ou sugerindo melhorias no repositório do GitHub.</li>
          <li>Contribuindo com código ou documentação.</li>
          <li>Divulgando o projeto para que mais pessoas possam utilizá-lo e contribuir.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Links Úteis</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/19950512/buscacreci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-semibold"
            >
              Repositório no GitHub
            </a>
          </li>
          <li>
            <a
              href="https://buscacreci.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-semibold"
            >
              Site Oficial
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Fique à vontade para entrar em contato ou colaborar conosco. A sua contribuição é muito importante para o crescimento do projeto!
        </p>
      </section>
    </main>
  </div>
);

export default Sobre;
