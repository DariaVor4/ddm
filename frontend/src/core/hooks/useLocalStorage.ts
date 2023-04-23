import { useState } from 'react';
import { isNil } from 'lodash';

const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T,
): [T, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    const removeKey = () => window.localStorage.removeItem(keyName);
    if (isNil(newValue)) {
      removeKey();
    } else {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {
        removeKey();
      }
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
