import { useEffect, useState } from 'react';

export default function useLocalStorage(key: string , defaultValue: any) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)!) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
