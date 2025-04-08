import { RefObject, useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(
  handleClick: () => void,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) handleClick();
    }

    document.addEventListener("click", handleOutsideClick, true);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleClick]);

  return ref;
}
