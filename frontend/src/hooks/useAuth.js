import { useState, useEffect } from 'react';

// Kerangka Custom Hook untuk Autentikasi
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    // TODO: implementasi proses login
  };

  const logout = () => {
    // TODO: implementasi proses logout
  };

  return {
    user,
    loading,
    login,
    logout,
  };
}

export default useAuth;
