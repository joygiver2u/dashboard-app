import apiClient from "../services/apiClient";
import { User } from "../types/User";

// Function to fetch all users from the backend.
export const fetchUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>("/users");

  // Return only the data from the response.
  return response.data;
};