import { useEffect, useState } from "react";

export function useLocalStorage(key: string, defaultValue?: string): [value: string, setValue: (key: string) => void] {
  const [value, setValue] = useState(() => localStorage.getItem(key) || (defaultValue ?? ""));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
