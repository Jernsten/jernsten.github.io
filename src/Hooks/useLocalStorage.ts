import { useEffect, useState } from "react";

function useLocalStorageKeyCount() {
  let numberOfKeys = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let aKey = localStorage.key(i);
    if (aKey?.includes("the-work")) {
      numberOfKeys++;
    }
  }
  return [numberOfKeys, numberOfKeys === 0];
}

export function useLocalStorage(
  key: string,
  defaultValue?: string
): [value: string | undefined, setValue: (key: string) => void] {
  const localStorageKey = `the-work.${key}`;
  const valueString = localStorage.getItem(localStorageKey) ?? defaultValue ?? "";
  const valueObject = valueString ? JSON.parse(valueString) : "";

  const [value, setValue] = useState(valueObject);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  let [, doesntHaveAnyKeys] = useLocalStorageKeyCount();

  useEffect(() => {
    doesntHaveAnyKeys && localStorage.removeItem(localStorageKey);
  }, [doesntHaveAnyKeys, localStorageKey]);

  return [value, setValue];
}
