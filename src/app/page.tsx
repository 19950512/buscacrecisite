"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";
import ConsultaCard from "../components/ConsultaCard"; // Importa o novo componente
import { useUser } from "./contexts/UserContext";
import { checkCreciStatus, fetchCreciData, requestCreciData } from "./repositories/creciRepository";

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
  const [codigoSolicitacao, setCodigoSolicitacao] = useState<string | null>(null); // Novo estado para armazenar o código de solicitação
  const [cardData, setCardData] = useState<CardData | null>(null); // Dados do card
  const [statusConsulta, setStatusConsulta] = useState<string | null>(null); // Novo estado para armazenar o status da consulta
  const { data: session } = useSession(); // Pegando os dados do usuário logado

  const removeEspacos = (str: string): string => {
    return str.replace(/\s+/g, "");
  };

  const handleSearch = async () => {
    const creciFinal = removeEspacos(creci); // Remove espaços em branco

    const creciRegex = /^[A-Z]{2}\d{1,6}[FJ]$/i;

    if (!creciFinal || !creciRegex.test(creciFinal)) {
      setResponseMessage(
        "Formato inválido do CRECI. Use algo como RS12345F ou SP98765J."
      );
      return;
    }

    if (!creciFinal) return; // Evita enviar uma busca vazia
    setIsLoading(true);
    setResponseMessage(null); // Limpa a mensagem anterior
    setCardData(null); // Limpa os dados do card
    setCodigoSolicitacao(null); // Limpa o código da solicitação
    setStatusConsulta(null); // Limpa o status da consulta

    try {
      // Solicita o CRECI e recebe o código de solicitação
      const { codigo_solicitacao } = await requestCreciData(creciFinal);
      console.log("Código de Solicitação:", codigo_solicitacao); // Log para verificar o código

      if (!codigo_solicitacao) {
        setResponseMessage("Código de solicitação não retornado corretamente.");
        setResponseMessageType("error");
        return;
      }

      setCodigoSolicitacao(codigo_solicitacao); // Armazena o código de solicitação
      setResponseMessage("Consulta realizada com sucesso. Aguarde a resposta...");
      setResponseMessageType("success"); // Tipo de mensagem de sucesso

      // Agora você pode usar o código de solicitação para verificar o status
      const checkInterval = setInterval(async () => {
        try {
          // Verifica o status usando o código de solicitação
          const statusData = await checkCreciStatus(codigo_solicitacao);
          console.log("Status Data:", statusData); // Log para verificar os dados de status

          // Atualiza o status da consulta com o status retornado
          setStatusConsulta(statusData.status);

          if (statusData.status === "FINALIZADO" && statusData.creciID !== "") {
            const respostaData = await fetchCreciData(statusData.creciID);

            if (respostaData.name) {
              // Se o status for FINALIZADO, mostramos os dados e paramos o intervalo
              setCardData(respostaData);
              setResponseMessage("Consulta finalizada com sucesso.");
              setResponseMessageType("success"); // Exibe mensagem de sucesso

              // Salva a consulta no contexto, se o usuário estiver logado
              if (session?.user?.email) {
                addCreciQuery(respostaData);
              }
            }

            clearInterval(checkInterval); // Para a consulta periódica quando os dados forem retornados
          } else if(statusData.status === "FINALIZADO" && statusData.creciID === "" && statusData.mensagem !== 'Creci já foi consultado anteriormente.') {
            // Se o status for FINALIZADO mas sem CRECI ID, mostra mensagem de erro
            setResponseMessage(statusData.mensagem || "Erro ao buscar dados.");
            setResponseMessageType("error"); // Exibe mensagem de erro
            clearInterval(checkInterval); // Para a consulta periódica
          }else {
            console.log("Status atual:", statusData.status); // Log para ver o status
          }
        } catch (error) {
          console.error("Erro ao buscar dados após solicitação:", error); // Log do erro real
          setResponseMessage("Erro ao buscar dados após solicitação.");
          setResponseMessageType("error"); // Tipo de mensagem de erro
          clearInterval(checkInterval); // Para o intervalo em caso de erro
        }
      }, 5000); // Verifica o status a cada 5 segundos
    } catch (error: unknown) {
      console.error("Erro ao solicitar o CRECI:", error); // Log do erro real
      setResponseMessage("Erro ao solicitar o CRECI.");
      setResponseMessageType("error"); // Tipo de mensagem de erro
    }

    setIsLoading(false); // Finaliza o loading após a requisição ser feita
  };

  // Estado que define o tipo da mensagem: sucesso ou erro
  const [responseMessageType, setResponseMessageType] = useState<"success" | "error" | null>(null);

  return (
    <div
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
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 p-8 pb-20 sm:p-20">
        {/* Conteúdo principal */}
        <div className="col-span-1 sm:col-span-9 flex flex-col items-center justify-center sm:items-start w-full px-4 sm:px-0">
          <main className="flex flex-col gap-3 items-center sm:items-start max-w-lg mx-auto sm:max-w-3xl">
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
                placeholder="Digite o CRECI exemplo: RS12345F"
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

            {/* Exibe o código da solicitação */}
            {codigoSolicitacao && (
              <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
                <p><strong>Código de Solicitação:</strong> {codigoSolicitacao}</p>
              </div>
            )}

            {/* Exibe a mensagem de erro ou sucesso */}
            {responseMessage && (
              <div className={`p-4 rounded-lg text-white ${responseMessageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {responseMessage}
              </div>
            )}

            {/* Exibe o status da consulta */}
            {statusConsulta && (
              <div className="p-4 bg-blue-100 text-blue-800 rounded-lg">
                <p><strong>Status da Consulta:</strong> {statusConsulta}</p>
              </div>
            )}

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

          </main>
        </div>

        {/* Exibe a lista de CRECIs consultados abaixo da consulta principal */}
        {creciQueries.length > 0 && (
          <div className="col-span-1 sm:col-span-3 w-full sm:w-80 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg max-h-[70vh] overflow-y-auto sm:sticky sm:top-10 mt-8 sm:mt-0 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 transition-colors">
            <h2 className="text-xl font-semibold text-center">Minhas consultas</h2>
            <ul className="space-y-2 mt-4">
              {creciQueries.map((query, index) => (
                <ConsultaCard key={index}
                  status={query.status}
                  data={query.data}
                  creci={query.creci}
                  photoUrl={query.photoUrl} // Passa a URL da foto
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
