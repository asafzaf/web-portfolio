import { useState, useEffect } from "react";

export const useAsset = (relativePath: string, fallback?: string) => {
  const base = import.meta.env.BASE_URL;
  const [src, setSrc] = useState(base + relativePath);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSrc(base + relativePath);
    setError(false);
  }, [relativePath, base]);

  const onError = () => {
    if (fallback) {
      setSrc(base + fallback);
    }
    setError(true);
  };

  return { src, error, onError };
};
