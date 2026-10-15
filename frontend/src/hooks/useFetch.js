import { useState, useEffect } from 'react';

// Kerangka Custom Hook untuk fetching data
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: implementasi fetch data dari URL
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
