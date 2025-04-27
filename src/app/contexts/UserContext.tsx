"use client"; // Diretiva que marca o componente como cliente

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// No seu contexto, defina o tipo de `creciQueries`
interface Consulta {
  creci: string;
  date: string;
  status: string;
  photoUrl: string; // URL da foto do corretor (opcional)
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Tipagem para o contexto do usuário
interface UserContextType {
  creciQueries: Consulta[]; // Lista de CRECIs consultados (agora é um array de objetos Consulta)
  addCreciQuery: (creci: string) => void; // Função para adicionar um CRECI
}

// Componente provedor que envolve o aplicativo
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session } = useSession(); // Pegando a sessão do NextAuth
  const [creciQueries, setCreciQueries] = useState<Consulta[]>([]); // Estado agora é um array de objetos Consulta

  useEffect(() => {
    if (session?.user?.email) {
      // Recuperando as consultas do usuário a partir do localStorage ou de uma API
      const storedQueries = localStorage.getItem(`${session.user.email}-creci-queries`);
      if (storedQueries) {
        setCreciQueries(JSON.parse(storedQueries));
      }
    }
  }, [session]);

  const addCreciQuery = (creci: string) => {
    const newQuery: Consulta = {
      creci,
      date: new Date().toLocaleDateString(), // Data da consulta
      status: "Ativo", // Status fixo por enquanto, pode ser dinâmico conforme necessário
      photoUrl: "/user-default.jpg", // URL da foto do corretor (pode ser alterado conforme necessário)
    };

    if (session?.user?.email) {
      // Atualiza o estado com a nova consulta
      const updatedQueries = [...creciQueries, newQuery];
      setCreciQueries(updatedQueries);

      // Armazenando as consultas no localStorage ou uma API
      localStorage.setItem(`${session.user.email}-creci-queries`, JSON.stringify(updatedQueries));
    }
  };

  return (
    <UserContext.Provider value={{ creciQueries, addCreciQuery }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
