// src/pages/sobre.tsx
import { FC } from "react";

const Sobre: FC = () => (
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
<br />
<br />
  <main className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center mb-6">Sobre o Busca CRECI</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">O que é o Busca CRECI?</h2>
      <p className="text-lg">
        O <strong>Busca CRECI</strong> é uma API desenvolvida para facilitar a consulta de informações sobre corretores de imóveis registrados no CRECI (Conselho Regional de Corretores de Imóveis) em todo o Brasil. Este projeto nasceu da necessidade de centralizar e simplificar o acesso a dados sobre corretores, proporcionando uma solução rápida e eficiente para desenvolvedores e empresas do ramo imobiliário.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Como Funciona?</h2>
      <p className="text-lg">
        A API permite que você consulte informações sobre corretores de imóveis registrados no CRECI, facilitando a validação de profissionais no mercado imobiliário. É uma ferramenta útil para integrar em sistemas de busca de corretores, sites imobiliários e outras aplicações que necessitam dessa informação.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Como Contribuir?</h2>
      <p className="text-lg">
        O Busca CRECI é um projeto open-source, e você pode contribuir de diversas formas:
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li>Reportando problemas ou sugerindo melhorias no repositório do GitHub.</li>
        <li>Contribuindo com código ou documentação.</li>
        <li>Divulgando o projeto para que mais pessoas possam utilizá-lo e contribuir.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Links Úteis</h2>
      <ul className="list-none pl-0">
        <li>
          <a
            href="https://github.com/19950512/buscacreci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Repositório no GitHub
          </a>
        </li>
        <li>
          <a
            href="https://buscacreci.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Site Oficial
          </a>
        </li>
      </ul>
    </section>
  </main>
  </div>
);

export default Sobre;
