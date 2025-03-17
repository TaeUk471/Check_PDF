import { useState, useEffect } from "react";

function useLocalStorageArray(key: string, initialValue: string[] = []) {
  const [storedValue, setStoredValue] = useState<string[]>(() => {
    try {
      const item = typeof window !== "undefined" ? localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const addItem = (id: string) => {
    setStoredValue(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const removeItem = (id: string) => {
    setStoredValue(prev => prev.filter(v => v !== id));
  };

  const clearAll = () => {
    setStoredValue([]);
  };

  return { storedValue, addItem, removeItem, clearAll };
}

export default useLocalStorageArray;
