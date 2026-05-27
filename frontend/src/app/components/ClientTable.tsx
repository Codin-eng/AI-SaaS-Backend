"use client";

import { Client } from "../types/client";
import { deleteClient } from "../services/client.service";

type Props = {
  clients: Client[];
  refresh: () => void;
};

export default function ClientTable({ clients, refresh }: Props) {
  const handleDelete = async (id: string) => {
    await deleteClient(id);
    refresh();
  };
if (clients.length === 0) {
  return <p>No clients found</p>;
}

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td className="border p-2">{client.name}</td>
            <td className="border p-2">{client.email}</td>

            <td className="border p-2">
              <button
                onClick={() => handleDelete(client.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}