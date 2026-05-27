import api from "./api";
import { Client } from "../types/client";

export const getClients = async (): Promise<Client[]> => {
  const res = await api.get("/clients");
  return res.data;
};

export const createClient = async (
  data: Omit<Client, "id">
): Promise<Client> => {
  const res = await api.post("/clients", data);
  return res.data;
};

export const deleteClient = async (id: string): Promise<void> => {
  await api.delete(`/clients/${id}`);
};