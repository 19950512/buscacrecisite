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

export async function fetchUltimosCrecis(): Promise<CreciApiResponse[]> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.buscacreci.com.br";
  
  // Aqui você pode substituir pelo seu endpoint real para pegar os últimos CRECIs.
  const res = await fetch(`${baseURL}/ultimoscrecis`);

  if (!res.ok) {
    let errorMessage = "Erro ao buscar últimos CRECIs.";
    try {
      const errorData = await res.json();
      if (errorData?.message) {
        errorMessage = errorData.message;
      }
    } catch {
      errorMessage = `Erro ao buscar últimos CRECIs: ${res.statusText}`;
    }

    throw new Error(errorMessage);
  }

  const data = await res.json();
  
  // Assumimos que o retorno da API é uma lista de CRECIs
  return data;
}

export async function requestCreciData(creci: string): Promise<CreciRequestResponse> {

  // AQUI MANDA PARA O DISCORD
  // 🧠 Obter informações de contexto do usuário
  let ip = "Desconhecido";
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    ip = ipData.ip || "Não identificado";
  } catch {
    ip = "Erro ao obter IP";
  }

  const userAgent = navigator.userAgent || "Desconhecido";
  const referer = document.referrer || "Não informado";

  // 🔔 Enviar notificação para o Discord
  notifyDiscord(
    `📥 *Consulta CRECI solicitada do site*\n` +
    `🔢 CRECI: \`${creci}\`\n` +
    `🌐 Origem: Website\n` +
    `🕐 Data/Hora: ${new Date().toLocaleString("pt-BR")}\n` +
    `📡 IP: ${ip}\n` +
    `🧭 User-Agent: ${userAgent}\n` +
    `🔗 Referer: ${referer}`
  );
  
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

export async function notifyDiscord(message: string) {
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Webhook do Discord não configurado.");
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
        username: "Busca CRECI [Site]",
        avatar_url: "https://buscacreci.com.br/_next/image?url=%2Flogo-branca.png&w=48&q=75",
      }),
    });

  } catch (error) {
    console.error("Erro ao enviar notificação para o Discord:", error);
  }
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

  const discordMessage = `📥 *Consulta CRECI recebida do site*\n
    Nome: ${data.nomeCompleto || ''}
    CRECI: ${data.creciCompleto || ''}
    Situação: ${data.situacao || ''}
    CPF: ${data.cpf || ''}
    Cidade: ${data.cidade || ''}
    Estado: ${data.estado || ''}
    Data: ${data.momento || ''}
  `;
  
  notifyDiscord(discordMessage);

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
