import { FC } from "react";

const Sobre: FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
    <main className="container w-full max-w-screen-lg mx-auto px-6 py-4 mt-20">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Sobre o Busca CRECI
      </h1>

      {/* O que é o Busca CRECI */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">O que é o Busca CRECI?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O <strong className="font-bold text-blue-600">Busca CRECI</strong> é uma API desenvolvida para facilitar a consulta de informações
          sobre corretores de imóveis registrados no CRECI (Conselho Regional de Corretores de Imóveis) em todo o Brasil.
          Este projeto nasceu da necessidade de centralizar e simplificar o acesso a dados sobre corretores,
          proporcionando uma solução rápida e eficiente para desenvolvedores e empresas do ramo imobiliário.
        </p>
      </section>

      {/* O Problema */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">O Problema</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          No mercado imobiliário, é comum encontrar dificuldades para validar a situação de um corretor de imóveis e obter
          informações sobre sua atividade.
          A ausência de uma API oficial do CRECI para essas consultas torna esse processo lento e fragmentado.
          Cada estado possui um site diferente, com formatos variados e informações descentralizadas,
          o que dificulta a integração com sistemas e aumenta as chances de inconsistência.
        </p>
      </section>

      {/* A Solução */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">A Solução</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          O <strong className="text-blue-600 dark:text-blue-400">Busca CRECI</strong> oferece uma solução única: uma API unificada
          que realiza consultas em tempo real nos sites oficiais dos CRECIs estaduais sempre que um usuário solicita a informação.
          Isso evita sobrecarregar os serviços oficiais, já que as consultas só ocorrem sob demanda.
          Para melhorar o desempenho e evitar requisições repetidas, as consultas são armazenadas em cache por até <strong>3 meses</strong>.
          A data da última verificação é exibida para manter a transparência com o usuário.
        </p>
      </section>

      {/* Como Funciona */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Como Funciona?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A API acessa os sites públicos dos CRECIs estaduais e extrai, via crawler, as informações que estão disponíveis
          abertamente ao público. Entre os dados exibidos estão:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-2">
          <li>Nome completo do corretor</li>
          <li>Situação do registro (ativo/inativo)</li>
          <li>Número do CRECI</li>
          <li>Estado e cidade de atuação</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Nenhuma consulta é feita automaticamente ou em segundo plano.
          Isso garante respeito às infraestruturas oficiais e mantém a ética de uso dos dados.
        </p>
      </section>

      {/* Como Contribuir */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Como Contribuir?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          O <strong className="font-bold text-blue-600">Busca CRECI</strong> é um projeto open-source, e você pode contribuir de diversas formas:
        </p>
        <ul className="list-disc pl-8 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>Reportando problemas ou sugerindo melhorias no repositório do GitHub</li>
          <li>Contribuindo com código ou documentação</li>
          <li>Divulgando o projeto para mais pessoas do setor imobiliário</li>
          <li>Participando das discussões técnicas e ideias no nosso Discord</li>
        </ul>
      </section>

      {/* Links Úteis */}
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
          <li>
            <a
              href="https://discord.gg/B4pXbCd22b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-semibold"
            >
              Comunidade no Discord
            </a>
          </li>
        </ul>
      </section>

      {/* Agradecimento */}
      <section className="mt-12 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Fique à vontade para entrar em contato ou colaborar conosco. A sua participação é essencial para o sucesso e evolução do projeto!
        </p>
      </section>
    </main>
  </div>
);

export default Sobre;