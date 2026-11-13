import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    function handleMediaChange() {
      setMatches(mediaQuery.matches);
    }

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
