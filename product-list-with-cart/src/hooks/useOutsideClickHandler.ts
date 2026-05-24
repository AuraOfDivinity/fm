import { useEffect, useRef } from "react";

export const useOutsideClickHandler = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    window.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("touchend", handleClickOutside);

    return () => {
      window.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
