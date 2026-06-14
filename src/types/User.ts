// This interface describes the structure
// of each user object returned by the API.

export interface User {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  role: string;
}