import { useEffect, useState } from "react";

function getIsPointerFine(): boolean {
  return window.matchMedia("(pointer: fine)").matches;
}

/**
 * True only on devices with an accurate pointer (mouse/trackpad).
 * Gates mouse-driven effects (custom cursor, tilt, parallax) so
 * touch devices never pay for listeners that can't fire correctly.
 */
export function usePointerFine(): boolean {
  const [isPointerFine, setIsPointerFine] = useState(getIsPointerFine);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPointerFine(event.matches);
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return isPointerFine;
}
