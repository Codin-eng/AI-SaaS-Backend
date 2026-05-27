"use client";

import { useEffect, useState } from "react";
import { getClients } from "../services/client.service";

import ClientTable from "../components/ClientTable";
import CreateClientForm from "../components/CreateClientForm";

import { Client } from "../types/client";

export default function DashboardPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchClients = async () => {
    setLoading(true);

    try {
      const data = await getClients();
      setClients(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Clients
      </h1>

      <CreateClientForm onCreated={fetchClients} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ClientTable
          clients={clients}
          refresh={fetchClients}
        />
      )}
    </div>
  );
}