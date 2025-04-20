import { RefObject, useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(
  handleClick: () => void,
  listenCapturing: boolean = false,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) handleClick();
    }

    document.addEventListener("click", handleOutsideClick, listenCapturing);

    return () =>
      document.removeEventListener(
        "click",
        handleOutsideClick,
        listenCapturing,
      );
  }, [handleClick, ref, listenCapturing]);

  return ref;
}
