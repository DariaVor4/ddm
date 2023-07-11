import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { LocalStorageKeysEnum } from '../api/enums/local-storage-keys.enum.ts';

export const useSettingsStore = create(combine({
  isDarkTheme: localStorage.getItem(LocalStorageKeysEnum.ThemeKey) === 'true' ?? false,
}, setState => ({
  toggleTheme: () => setState(prev => {
    localStorage.setItem(LocalStorageKeysEnum.ThemeKey, (!prev.isDarkTheme).toString());
    return ({ isDarkTheme: !prev.isDarkTheme });
  }),
})));
