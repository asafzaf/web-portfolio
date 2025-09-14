import { useState, useEffect } from "react";

export const usePicture = (name: string, ext: string, fallback?: string) => {
  const base = import.meta.env.BASE_URL;
  const [src, setSrc] = useState(base + `images/${name}.${ext}`);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new window.Image();
    const imageUrl = base + `images/${name}.${ext}`;
    setLoading(true);
    setError(false);

    image.onload = () => {
      setSrc(imageUrl);
      setLoading(false);
    };
    image.onerror = () => {
      if (fallback) {
        setSrc(base + fallback);
      }
      setError(true);
      setLoading(false);
    };
    image.src = imageUrl;
  }, [name, ext, base, fallback]);

  const onError = () => {
    if (fallback) {
      setSrc(base + fallback);
    }
    setError(true);
    setLoading(false);
  };

  return { src, error, loading, onError };
};
