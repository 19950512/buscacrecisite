"use client"; 

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import SkeletonCard from '../components/SkeletonCard';
import ErrorMessage from '../components/ErrorMessage';
import Card from '../components/Card';
import ConsultaCard from '../components/ConsultaCard'; // Importa o novo componente
import { useUser } from './contexts/UserContext';
import { fetchCreciData } from './repositories/creciRepository';

interface CardData {
  name: string;
  status: string;
  creci: string;
  city: string;
  state: string;
  phones: string[];
  emails: string[];
  address: string;
  cpf: string;
  photoUrl: string;
}


export default function Home() {
  const [creci, setCreci] = useState("");
  const { creciQueries, addCreciQuery } = useUser(); // Acessando o contexto de consultas
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [cardData, setCardData] = useState<CardData | null>(null); // Dados do card
  const { data: session } = useSession(); // Pegando os dados do usuário logado

  const handleSearch = async () => {
    if (!creci) return; // Evita enviar uma busca vazia
    setIsLoading(true);
    setResponseMessage(null); // Limpa a mensagem anterior
    setCardData(null); // Limpa os dados do card

    try {
      const data = await fetchCreciData(creci);
      setCardData(data);
  
      if (session?.user?.email) {
        addCreciQuery(data); // Assumindo que salva também os outros dados (melhorar se necessário)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResponseMessage(error.message || "Erro inesperado ao buscar o CRECI.");
      } else {
        setResponseMessage("Erro inesperado ao buscar o CRECI.");
      }
    }

    setIsLoading(false); // Finaliza o loading após 2 segundos
  };

  return (<div
    className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors"
    style={{
      backgroundImage: "url('/brasilzao_implementado.png')",
      backgroundSize: "contain",
      backgroundPosition: "center right",
      backgroundRepeat: "no-repeat",
    }}
  >
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 p-8 pb-20 sm:p-20">
        {/* Conteúdo principal */}
        <div className="col-span-1 sm:col-span-9 flex flex-col items-center justify-center sm:items-start w-full px-4 sm:px-0">
          <main className="flex flex-col gap-8 items-center sm:items-start max-w-lg mx-auto sm:max-w-3xl">
            <h1 className="text-4xl font-bold text-center sm:text-left">
              Bem-vindo ao Busca CRECI
            </h1>
            <p className="text-lg text-center sm:text-left">
              Consulte o Registro de Corretores e Imobiliárias
            </p>
  
            {/* Campo de Busca */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg transition-colors">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
                placeholder="Digite o número CRECI"
                value={creci}
                onChange={(e) => setCreci(e.target.value)}
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className={`w-full mt-4 py-3 rounded-lg text-white ${
                  isLoading
                    ? 'bg-gray-400 dark:bg-gray-600'
                    : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-4 border-t-4 border-blue-600 rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Buscar"
                )}
              </button>
            </div>

  
            {/* Exibe o Skeleton enquanto os dados estão sendo carregados */}
            {isLoading && <SkeletonCard />}
  
            {/* Exibe o card com os dados retornados */}
            {cardData && (
              <Card
                name={cardData.name}
                status={cardData.status}
                creci={cardData.creci}
                city={cardData.city}
                state={cardData.state}
                phones={cardData.phones}
                emails={cardData.emails}
                address={cardData.address}
                cpf={cardData.cpf}
                photoUrl={cardData.photoUrl} // Passa a URL da foto
              />
            )}
  
            {/* Exibe a mensagem de erro */}
            {responseMessage && <ErrorMessage message={responseMessage} />}
          </main>
        </div>
  
        {/* Exibe a lista de CRECIs consultados abaixo da consulta principal */}
        {creciQueries.length > 0 && (
          <div className="col-span-1 sm:col-span-3 w-full sm:w-80 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg max-h-[70vh] overflow-y-auto sm:sticky sm:top-10 mt-8 sm:mt-0 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 transition-colors">
            <h2 className="text-xl font-semibold text-center">Minhas consultas</h2><br />
            <div className="space-y-4">
              {creciQueries.slice().reverse().map((query, index) => (
                <ConsultaCard
                  key={index}
                  creci={query.creci}    // Agora isso funciona, pois 'query' é um objeto com a propriedade 'creci'
                  data={query.data}
                  photoUrl={query.photoUrl} // Passa a URL da foto
                  status={query.status}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
  
}
