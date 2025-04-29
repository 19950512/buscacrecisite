
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
    photoUrl: string;
    data: string;
  }
  
  export async function fetchCreciData(creci: string): Promise<CreciApiResponse> {
   
    const baseURL = process.env.NEXT_PUBLIC_API_URL || "https://api.buscacreci.com.br";

    const res = await fetch(`${baseURL}/?creci=${encodeURIComponent(creci)}`);
    
    if(!res.ok){
      // Tenta ler e interpretar o JSON de erro
      let errorMessage = "Erro ao buscar CRECI.";
      try {
        const errorData = await res.json();
        if (errorData?.message) {
          errorMessage = errorData.message;
        }
      } catch {
        // fallback para statusText se o JSON der erro
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
      photoUrl: data.photoUrl || '/user-default.jpg'
    };
  }