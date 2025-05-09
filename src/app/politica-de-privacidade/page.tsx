// src/pages/politica-de-privacidade.tsx
import { FC } from "react";

const PoliticaDePrivacidade: FC = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
    <br /><br />
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Política de Privacidade</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> se compromete a proteger sua privacidade. Esta Política de Privacidade descreve as informações que coletamos, como as utilizamos e as medidas que tomamos para proteger seus dados.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Coleta de Dados</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> não coleta dados pessoais identificáveis dos usuários. A única informação processada é a consulta realizada no sistema, que busca dados públicos sobre corretores de imóveis registrados no CRECI. Não coletamos informações de contato, localização ou qualquer dado pessoal dos usuários.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Uso das Informações</h2>
        <p className="text-lg">
          As informações que você consulta são usadas apenas para fornecer os resultados da busca sobre corretores e imobiliárias registrados. Não utilizamos essas informações para fins comerciais ou publicitários.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Segurança dos Dados</h2>
        <p className="text-lg">
          Embora o <strong>BuscaCRECI</strong> não armazene dados pessoais, tomamos medidas para proteger a segurança das informações acessadas através de nossa plataforma. Implementamos práticas de segurança no desenvolvimento do sistema para garantir a integridade e a confidencialidade dos dados públicos fornecidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Informações</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> não compartilha, vende ou aluga qualquer dado pessoal ou de consulta realizada para terceiros. A consulta de informações sobre corretores e imobiliárias é pública e não requer qualquer tipo de compartilhamento com outras partes, exceto para exibir as informações solicitadas no site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> não utiliza cookies para rastrear informações de navegação dos usuários. Contudo, pode ser necessário o uso de cookies para o funcionamento correto do site, como para armazenar preferências de exibição ou garantir que a navegação seja estável. Você pode configurar seu navegador para recusar cookies, se desejar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Links Externos</h2>
        <p className="text-lg">
          O site do <strong>BuscaCRECI</strong> pode conter links para sites de terceiros. Não nos responsabilizamos pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você leia as políticas de privacidade de cada site que acessar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Alterações na Política de Privacidade</h2>
        <p className="text-lg">
          O <strong>BuscaCRECI</strong> pode atualizar esta Política de Privacidade a qualquer momento. Caso isso ocorra, as alterações serão publicadas nesta página com a data de atualização. Recomendamos que você revise periodicamente esta política para se manter informado sobre como protegemos sua privacidade.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
        <p className="text-lg">
          Se você tiver dúvidas sobre nossa Política de Privacidade, entre em contato conosco através do repositório oficial do projeto no GitHub: 
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

export default PoliticaDePrivacidade;
