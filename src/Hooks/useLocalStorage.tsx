import { useEffect, useState } from "react";

export function useLocalStorage(key: string): [value: string, setValue: (key: string) => void] {
  const lsKeyName = `the-work.${key}`;
  const valueString = localStorage.getItem(lsKeyName) ?? "";
  const valueObject = valueString ? JSON.parse(valueString) : "";

  const [value, setValue] = useState(valueObject);

  useEffect(() => {
    value && localStorage.setItem(lsKeyName, JSON.stringify(value));
  }, [lsKeyName, value]);

  return [value, setValue];
}

export function getLocalStorageKeys(...theArgs: string[]) {
  const returnObject: { [key: string]: string } = {};

  theArgs.forEach((key: string) => {
    const [value] = useLocalStorage(key);
    Object.assign(returnObject, { [key]: value });
  });

  return returnObject;
}
