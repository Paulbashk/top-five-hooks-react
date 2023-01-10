import { useEffect, useState } from "react";

const useRequest = (request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    request()
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return [data, loading, error];
}

export default useRequest;