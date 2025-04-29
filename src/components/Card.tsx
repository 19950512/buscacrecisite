import React from "react";
import Image from "next/image";

type CardProps = {
  name: string;
  status: string;
  creci: string;
  city: string;
  state: string;
  phones: string[];
  emails: string[];
  address?: string;
  cpf?: string;
  photoUrl?: string;
};

const Card: React.FC<CardProps> = ({
  name,
  status,
  creci,
  city,
  state,
  phones,
  emails,
  address,
  cpf,
  photoUrl,
}) => {
  const hasContactInfo =
    (phones && phones.length > 0) ||
    (emails && emails.length > 0) ||
    !!address ||
    !!cpf;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mx-auto dark:bg-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={photoUrl || "/user-default.jpg"}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">CRECI: {creci}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Cidade: {city}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Estado: {state}</p>
      </div>

      {hasContactInfo && (
        <div className="mt-4">
          <h3 className="text-lg text-gray-800 dark:text-white">Contatos</h3>
          {phones.length > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-300">Telefones: {phones.join(", ")}</p>
          )}
          {emails.length > 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-300">Emails: {emails.join(", ")}</p>
          )}
          {address && (
            <p className="text-sm text-gray-600 dark:text-gray-300">Endereço: {address}</p>
          )}
          {cpf && (
            <p className="text-sm text-gray-600 dark:text-gray-300">CPF: {cpf}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
