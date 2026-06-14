import axios from "axios";

// Create a reusable Axios instance.
// Base URL means we don't have to write the full URL every time.
const apiClient = axios.create({
  baseURL: "http://localhost:3001",
});

export default apiClient;