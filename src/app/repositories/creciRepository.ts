export interface CreciApiStatusResponse {
  creciCompleto: string;
  creciID: string;
  mensagem: string;
  status: string;
  codigo_solicitacao: string; // Adicionando o código de solicitação
}

export interface CreciApiResponse {
  name: string;
  status: string;
  creci: string;
  city: string;
  state: string;
  phones: string[];
  emails: string[];
  address: string;
  cpf: string;
  data: string;
  photoUrl: string;

}

export interface CreciRequestResponse {
  message: string;
  codigo_solicitacao: string;
}

export async function requestCreciData(creci: string): Promise<CreciRequestResponse> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.buscacreci.com.br";
  
  const res = await fetch(`${baseURL}/?creci=${encodeURIComponent(creci)}`, {
    method: "POST", // Supondo que seja um POST para realizar a solicitação
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    let errorMessage = "Erro ao solicitar consulta CRECI.";
    try {
      const errorData = await res.json();
      if (errorData?.message) {
        errorMessage = errorData.message;
      }
    } catch {
      errorMessage = `Erro ao solicitar consulta CRECI: ${res.statusText}`;
    }

    throw new Error(errorMessage);
  }

  const data = await res.json();

  if (!data || !data.codigo_solicitacao) {
    throw new Error("Código de solicitação não retornado.");
  }

  return {
    message: "Consulta solicitada com sucesso.",
    codigo_solicitacao: data.codigo_solicitacao,
  };
}

export async function checkCreciStatus(codigoSolicitacao: string): Promise<CreciApiStatusResponse> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.buscacreci.com.br";

  const res = await fetch(`${baseURL}/status?codigo_solicitacao=${encodeURIComponent(codigoSolicitacao)}`);

  if (!res.ok) {
    let errorMessage = "Erro ao consultar o status da solicitação.";
    try {
      const errorData = await res.json();
      if (errorData?.message) {
        errorMessage = errorData.message;
      }
    } catch {
      errorMessage = `Erro ao consultar o status da solicitação: ${res.statusText}`;
    }

    throw new Error(errorMessage);
  }

  const data = await res.json();

  if (!data || !data.codigoSolicitacao || !data.codigoSolicitacao) {
    throw new Error("Dados incompletos retornados da API.");
  }

  return {
    creciCompleto: data.creciCompleto,
    creciID: data.creciID,
    mensagem: data.mensagem,
    status: data.status,
    codigo_solicitacao: codigoSolicitacao, // Incluindo o código de solicitação na resposta
  };
}

// Atualização do fetchCreciData para incluir o código de solicitação
export async function fetchCreciData(creci: string): Promise<CreciApiResponse> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.buscacreci.com.br";

  const res = await fetch(`${baseURL}/creci?id=${encodeURIComponent(creci)}`);
  
  if (!res.ok) {
    let errorMessage = "Erro ao buscar CRECI.";
    try {
      const errorData = await res.json();
      if (errorData?.message) {
        errorMessage = errorData.message;
      }
    } catch {
      errorMessage = `Erro ao buscar CRECI: ${res.statusText}`;
    }

    throw new Error(errorMessage);
  }

  const data = await res.json();

  if (!data || !data.nomeCompleto || !data.creciCompleto) {
    throw new Error("Dados incompletos retornados da API.");
  }

  return {
    name: data.nomeCompleto,
    status: data.situacao,
    creci: data.creciCompleto,
    city: data.cidade,
    state: data.estado,
    phones: data.phones || [],
    emails: data.emails || [],
    address: data.address || '',
    cpf: data.cpf || '',
    data: data.momento || '',
    photoUrl: data.photoUrl || '/user-default.jpg',
  };
}
