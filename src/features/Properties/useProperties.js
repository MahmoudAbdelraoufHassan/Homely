import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export function useProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProperties() {
      try {
        const response = await fetch(`${API_URL}/properties`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load properties (${response.status})`);
        }

        const data = await response.json();
        setProperties(data);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError(loadError.message || "Failed to load properties.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadProperties();

    return () => controller.abort();
  }, []);

  return { properties, isLoading, error };
}
