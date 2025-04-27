// components/ConsultaCard.tsx

interface ConsultaCardProps {
    creci: string;
    data: string;
    status: string;
    photoUrl: string; // Adicionando o campo da foto
  }
  
  const ConsultaCard: React.FC<ConsultaCardProps> = ({ creci, data, status, photoUrl }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Foto do corretor */}
        <div className="flex items-center space-x-4">
          <img
            src={photoUrl || "/user-default.jpg"} // Usando uma foto padrão caso não tenha
            alt={`Foto do corretor ${creci}`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p><strong>CRECI:</strong> {creci}</p>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Status:</strong> {status}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConsultaCard;
  