import { useState } from "react";

export const useLocalStorage = (initialKey) => {
  const [storageKey, setStorageKey] = useState(initialKey);

  const saveToLocalStorage = (value, key = storageKey) => {
    if (localStorage && value) localStorage.setItem(key, JSON.stringify(value));
  };

  const isStored = (key = storageKey) =>
    localStorage && localStorage.getItem(key);

  const getStored = (key = storageKey) => JSON.parse(localStorage.getItem(key));

  return { isStored, getStored, saveToLocalStorage, setStorageKey };
};
