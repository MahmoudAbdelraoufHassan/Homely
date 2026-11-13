import { useEffect, useState } from "react";
import { getProperties as fetchProperties } from "../../services/properties";

export function useProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProperties() {
      try {
        const data = await fetchProperties({ signal: controller.signal });
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
