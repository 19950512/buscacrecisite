// src/pages/termos-de-uso.tsx
import { FC } from "react";

const TermosDeUso: FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
    <br />
    <br />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Termos de Uso</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> é um projeto open-source que permite a consulta pública e gratuita de informações sobre corretores e imobiliárias registrados no Conselho Regional de Corretores de Imóveis (CRECI) no Brasil. O objetivo deste projeto é proporcionar uma maneira simples e rápida para validar e obter informações sobre os profissionais do mercado imobiliário.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Aceitação dos Termos</h2>
        <p className="text-lg">
          Ao acessar ou utilizar o <strong>BuscaCRECI</strong>, você concorda em cumprir os termos e condições descritos neste documento. Caso não concorde com algum dos termos aqui descritos, pedimos que não utilize o serviço.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Uso Permitido</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> está disponível para fins informativos. Você pode acessar as informações de corretores e imobiliárias, mas não está autorizado a utilizar esses dados para fins comerciais, sem a devida autorização dos responsáveis pelo sistema ou pelas entidades envolvidas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
        <p className="text-lg">
          O conteúdo do <strong>BuscaCRECI</strong>, incluindo a interface, design e banco de dados, é de propriedade de seus respectivos donos e está protegido por leis de direitos autorais e propriedade intelectual. O código-fonte do projeto é open-source e está disponível sob a Licença MIT no repositório do GitHub.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> se compromete a fornecer informações precisas, mas não pode garantir que todos os dados estarão sempre 100% atualizados ou livres de erros. O uso das informações é de responsabilidade do usuário. Não nos responsabilizamos por quaisquer danos ou prejuízos resultantes do uso incorreto ou impreciso das informações.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Alterações nos Termos de Uso</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> pode, a qualquer momento, atualizar ou modificar estes Termos de Uso. Recomendamos que você os consulte regularmente. Caso haja alguma alteração significativa, você será notificado através do site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Licença</h2>
        <p className="text-lg">
          O código-fonte do <strong>BuscaCRECI</strong> é licenciado sob a Licença MIT. Você tem permissão para usar, modificar e distribuir o código, desde que mantenha os devidos créditos conforme as condições da licença.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
        <p className="text-lg">
          Se você tiver dúvidas ou precisar de mais informações sobre os Termos de Uso, entre em contato com a equipe do <strong>BuscaCRECI</strong> através do repositório oficial no <br /><br />GitHub: 
           <a
            href="https://github.com/19950512/buscacreci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Repositório no GitHub
          </a>.
        </p>
      </section>
    </main>
  </div>
);

export default TermosDeUso;
