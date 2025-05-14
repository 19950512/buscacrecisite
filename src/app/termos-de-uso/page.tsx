// src/pages/termos.tsx
import { FC } from "react";

const Termos: FC = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 relative">
    <main className="container w-full max-w-screen-lg mx-auto px-6 py-4 mt-20">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Termos de Uso
      </h1>

      <section className="mb-10">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O <strong>Busca CRECI</strong> é uma plataforma de consulta pública que centraliza informações sobre corretores de imóveis registrados nos CRECI estaduais, com base em dados públicos disponíveis nos sites oficiais.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Funcionamento</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A consulta é realizada sob demanda, e os dados são armazenados temporariamente para fins de cache e performance. Esse cache é atualizado a cada 3 meses, a fim de evitar sobrecarga nas fontes oficiais e garantir agilidade ao usuário.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          A data da última atualização da consulta é exibida de forma clara no resultado, garantindo transparência.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Limitações</h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300">
          <li>O Busca CRECI não substitui os canais oficiais de validação do CRECI.</li>
          <li>As informações exibidas podem conter divergências ou defasagens das fontes de origem.</li>
          <li>Não nos responsabilizamos por decisões tomadas com base exclusivamente nas informações exibidas.</li>
        </ul>
      </section>
    </main>
  </div>
);

export default Termos;
