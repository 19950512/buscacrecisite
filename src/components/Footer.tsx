import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between px-6 py-4">

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna de Texto */}
          <div className="text-center sm:text-left">
            <h5 className="text-lg font-bold mb-2">Busca Creci</h5>
            <p>© {new Date().getFullYear()} Busca Creci. Todos os direitos reservados.</p>
          </div>

          {/* Coluna de Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/termos-de-uso" className="hover:text-gray-400">
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-gray-400">
              Política de Privacidade
            </Link>
            <Link href="/sobre" className="hover:text-gray-400">
              Sobre
            </Link>
            <Link href="/ultimos-crecis" className="hover:text-gray-400">
              Últimos CRECIs Consultados
            </Link>
          </div>
        </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
