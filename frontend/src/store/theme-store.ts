import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { LocalStorageKeys } from '../api/local-storage-keys';

export const useMainStore = create(combine({
  isDarkTheme: localStorage.getItem(LocalStorageKeys.ThemeKey) === 'true' ?? false,
}, setState => ({
  toggleTheme: () => setState(prev => {
    localStorage.setItem(LocalStorageKeys.ThemeKey, (!prev.isDarkTheme).toString());
    return ({ isDarkTheme: !prev.isDarkTheme });
  }),
})));
