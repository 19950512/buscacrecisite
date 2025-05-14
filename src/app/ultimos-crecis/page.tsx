"use client";

import { FC, useState, useEffect } from "react";
import { CreciApiResponse, fetchUltimosCrecis } from "../repositories/creciRepository";

const UltimosCrecis: FC = () => {
  const [crecis, setCrecis] = useState<CreciApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Função para buscar a lista de CRECIs
  const fetchUltimosCrecisList = async () => {
    setLoading(true);
    try {
      const data = await fetchUltimosCrecis(); // Usando o repositório para pegar os últimos CRECIs
      setCrecis(data);
    } catch (error) {
      console.error("Erro ao buscar últimos CRECIs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carregar os dados quando a página for renderizada
  useEffect(() => {
    fetchUltimosCrecisList();
  }, []);

  // Função para exibir detalhes de um CRECI
  const exibirDetalhes = (creci: string) => {
    alert(`Detalhes do CRECI: ${creci}`); // Exemplo de exibição dos detalhes, substitua por um modal ou outra interface
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <br /><br />
      <main className="w-full max-w-screen-lg mx-auto container mx-auto px-6 py-4">
        
        <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
          Últimos CRECIs Consultados
        </h1>

        <button
          onClick={fetchUltimosCrecisList}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mb-8 mx-auto block"
        >
          {loading ? "Atualizando..." : "Atualizar Lista"}
        </button>

        {loading ? (
          <div className="text-center text-lg text-gray-700 dark:text-gray-300">
            Carregando os últimos CRECIs...
          </div>
        ) : (
          <div className="space-y-6">
            {crecis.length === 0 ? (
              <div className="text-center text-lg text-gray-700 dark:text-gray-300">
                Nenhum CRECI encontrado.
              </div>
            ) : (
              crecis.map((creci) => (
                <div
                  key={creci.creci}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center"
                >
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{creci.name}</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>CRECI:</strong> {creci.creci}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Cidade:</strong> {creci.city}, {creci.state}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Data:</strong> {new Date(creci.data).toLocaleString("pt-BR")}
                    </p>

                  </div>
                  <button
                    onClick={() => exibirDetalhes(creci.creci)}
                    disabled={true}
                    className={`px-4 py-2 rounded-lg text-white bg-gray-400 cursor-not-allowed`}
                  >
                    Ver Mais
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default UltimosCrecis;
