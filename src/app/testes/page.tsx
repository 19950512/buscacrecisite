"use client";

import React, { useState } from 'react';
import { fetchCreciData } from '../repositories/creciRepository';

type CreciStatus = 'idle' | 'loading' | 'success' | 'error';

interface CreciEntry {
  id: number;
  label: string;
  status: CreciStatus;
  error?: string;
}

interface CreciGroup {
  state: string;
  items: CreciEntry[];
}

const generateGroupedFakeCrecis = (): CreciGroup[] => {
  const states = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  let idCounter = 1;

  return states.map(state => {
    const items: CreciEntry[] = Array.from({ length: 12 }, () => {
      const number = Math.floor(1000 + Math.random() * 2000);
      const type = Math.random() > 0.5 ? 'F' : 'J';
      const label = `CRECI ${state} ${number} ${type}`;
      return {
        id: idCounter++,
        label,
        status: 'idle' as CreciStatus,
      };
    });

    return { state, items };
  });
};

const Home = () => {
  const [creciGroups, setCreciGroups] = useState<CreciGroup[]>(generateGroupedFakeCrecis());

  const handleVerify = async (groupIndex: number, id: number) => {
    setCreciGroups(prev =>
      prev.map((group, gi) =>
        gi === groupIndex
          ? {
              ...group,
              items: group.items.map(item =>
                item.id === id ? { ...item, status: 'loading', error: undefined } : item
              ),
            }
          : group
      )
    );

    let isSuccess = false;
    let mensagem = '';

    try {
      const creci = creciGroups[groupIndex].items.find(item => item.id === id);
      if (!creci) return;

      const match = creci.label.match(/^CRECI\s+([A-Z]{2})\s+(\d+)\s+([FJ])$/);
      if (!match) throw new Error("Formato inválido");

      const formattedCreci = `${match[1]}${match[2]}${match[3]}`;
      await fetchCreciData(formattedCreci);
      isSuccess = true;

    } catch (error: unknown) {
      isSuccess = false;
      if (error instanceof Error) {
        mensagem = error.message || "Erro inesperado ao buscar o CRECI.";
      } else {
        mensagem = "Erro inesperado ao buscar o CRECI.";
      }
    } finally {
      setCreciGroups(prev =>
        prev.map((group, gi) =>
          gi === groupIndex
            ? {
                ...group,
                items: group.items.map(item =>
                  item.id === id
                    ? {
                        ...item,
                        status: isSuccess ? 'success' : 'error',
                        error: isSuccess ? undefined : mensagem,
                      }
                    : item
                ),
              }
            : group
        )
      );
    }
  };

  return (
    <main className="mt-20 w-full max-w-screen-lg mx-auto bg-white dark:bg-gray-900 transition-colors duration-300 px-6 py-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Consulta de CRECI por Estado</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">Clique no botão Verificar para consultar o status do CRECI, é uma maneira para verificar se a API está funcionando corretamente.</p>

      {creciGroups.map((group, groupIndex) => (
        <div key={group.state} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{group.state}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {group.items.map(creci => (
              <li
                key={creci.id}
                className="flex flex-col justify-between border p-4 rounded shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300"
              >
                <span className="mb-2 text-gray-900 dark:text-white">{creci.label}</span>
                <div className="flex items-center justify-between">
                  {creci.status === 'idle' && (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => handleVerify(groupIndex, creci.id)}
                    >Verificar</button>
                  )}
                  {creci.status === 'loading' && (
                    <span className="text-gray-500 text-sm">Verificando...</span>
                  )}
                  {creci.status === 'success' && (
                    <span className="text-green-600 text-sm">✅ Sucesso</span>
                  )}
                  {creci.status === 'error' && (
                    <span className="text-red-600 text-sm">❌ Erro</span>
                  )}
                </div>
                {creci.status === 'error' && creci.error && (
                  <span className="text-red-500 text-xs mt-1">{creci.error}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default Home;
