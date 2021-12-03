import React, { useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  init: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const stored = localStorage.getItem(key);
  const [value, setValue] = useState(stored !== null ? JSON.parse(stored) as T : init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
