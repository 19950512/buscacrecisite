"use client"; // Diretiva que marca o componente como cliente

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { CreciApiResponse } from '../repositories/creciRepository';

// No seu contexto, defina o tipo de `creciQueries`
interface Consulta {
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
  data: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Tipagem para o contexto do usuário
interface UserContextType {
  creciQueries: Consulta[]; // Lista de CRECIs consultados (agora é um array de objetos Consulta)
  addCreciQuery: (data: CreciApiResponse) => void; // Função para adicionar um CRECI
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

  const addCreciQuery = (data: CreciApiResponse) => {
    const newQuery: Consulta = {
      name: data.name,
      status: data.status,
      creci: data.creci,
      city: data.city,
      state: data.state,
      phones: data.phones,
      emails: data.emails,
      address: data.address,
      cpf: data.cpf,
      data: data.data,
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
