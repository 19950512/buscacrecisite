// components/ConsultaCard.tsx
import Image from "next/image";

interface ConsultaCardProps {
  creci: string;
  data: string;
  status: string;
  photoUrl: string;
}

const ConsultaCard: React.FC<ConsultaCardProps> = ({ creci, data, status, photoUrl }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <Image
          width={48}
          height={48}
          src={photoUrl || "/user-default.jpg"}
          alt={`Foto do corretor ${creci}`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-sm">
          <p><strong>CRECI:</strong> {creci}</p>
          <p><strong>Data:</strong> {data}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={
              status.toLowerCase() === "ativo"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }>
              {status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultaCard;
