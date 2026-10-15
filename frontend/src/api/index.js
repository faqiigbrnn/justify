// Kerangka API Client
// Tempat konfigurasi base URL, headers, dan instance request (misal: fetch / axios)

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiClient = {
  async get(endpoint) {
    // TODO: implementasi HTTP GET
  },

  async post(endpoint, data) {
    // TODO: implementasi HTTP POST
  },

  async put(endpoint, data) {
    // TODO: implementasi HTTP PUT
  },

  async delete(endpoint) {
    // TODO: implementasi HTTP DELETE
  },
};

export default apiClient;
