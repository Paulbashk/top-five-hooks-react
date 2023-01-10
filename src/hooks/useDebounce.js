import { useEffect, useState } from "react";

export default function useDebounce(value, delay, callback) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
      
      if(callback !== null) callback();
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return [debounced, setDebounced];
}