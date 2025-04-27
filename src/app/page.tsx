"use client"; 

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import SkeletonCard from '../components/SkeletonCard';
import ErrorMessage from '../components/ErrorMessage';
import Card from '../components/Card';
import ConsultaCard from '../components/ConsultaCard'; // Importa o novo componente
import { useUser } from './contexts/UserContext';

export default function Home() {
  const [creci, setCreci] = useState("");
  const { creciQueries, addCreciQuery } = useUser(); // Acessando o contexto de consultas
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [cardData, setCardData] = useState<any | null>(null); // Dados do card
  const { data: session } = useSession(); // Pegando os dados do usuário logado

  const handleSearch = async () => {
    if (!creci) return; // Evita enviar uma busca vazia
    setIsLoading(true);
    setResponseMessage(null); // Limpa a mensagem anterior
    setCardData(null); // Limpa os dados do card

    // Simulando uma requisição para a API
    setTimeout(() => {
      // Simulação de resposta de uma API
      const simulatedData = {
        name: "Edecir Joao Bordin",
        status: "Ativo",
        creci: "CRECI/RS 12345-F",
        city: "Passo Fundo",
        state: "RS",
        phones: ["(54) 1234-5678", "(54) 8765-4321"],
        emails: ["edecir.bordin@email.com", "joao.bordin@email.com"],
        address: "Rua A, 123, Centro, Passo Fundo, RS",
        cpf: "123.456.789-00",
        photoUrl: "/user-default.jpg", // URL da foto (se tiver)
      };

      // Simulando um erro (basta comentar para remover o erro)
      const isError = false; // Troque para 'true' para simular um erro
      if (isError) {
        setResponseMessage("Erro ao buscar as informações do CRECI. Tente novamente mais tarde.");
      } else {
        setCardData(simulatedData); // Atualiza os dados do card com a simulação

        // Adicionando o CRECI consultado na lista
        if (session?.user?.email) {
          addCreciQuery(creci); // Adiciona a consulta ao contexto
        }
      }

      setIsLoading(false); // Finaliza o loading após 2 segundos
    }, 2000);
  };



  return (
    <div
      className="min-h-screen relative"
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
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Digite o número CRECI"
                value={creci}
                onChange={(e) => setCreci(e.target.value)}
              />
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className={`w-full mt-4 py-3 rounded-lg ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
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
        <div className="col-span-1 sm:col-span-3 w-full sm:w-80 p-4 bg-white shadow-lg max-h-[70vh] overflow-y-auto sm:sticky sm:top-10 mt-8 sm:mt-0 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" style={{ backgroundColor:"#ffffffd1" }}>
          <h2 className="text-xl font-semibold text-center">Minhas consultas</h2><br />
          <div className="space-y-4">
            {creciQueries.slice().reverse().map((query, index) => (
              <ConsultaCard
                key={index}
                creci={query.creci}    // Agora isso funciona, pois 'query' é um objeto com a propriedade 'creci'
                data={query.date}
                photoUrl={query.photoUrl} // Passa a URL da foto
                status={query.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}
