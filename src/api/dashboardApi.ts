import apiClient from "../services/apiClient";
import type { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>("/users");
  return response.data;
};