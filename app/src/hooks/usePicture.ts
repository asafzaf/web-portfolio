import { useState, useEffect } from "react";

export const usePicture = (name: string, ext: string, fallback?: string) => {
  const base = import.meta.env.BASE_URL;
  const [src, setSrc] = useState(base + `images/${name}.${ext}`);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSrc(base + `images/${name}.${ext}`);
    setError(false);
  }, [name, ext, base]);

  const onError = () => {
    if (fallback) {
      setSrc(base + fallback);
    }
    setError(true);
  };

  return { src, error, onError };
};
