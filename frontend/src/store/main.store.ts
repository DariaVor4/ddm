import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { LocalStorageKeys } from '../api/local-storage-keys';

const useMainStore = create(combine({
  isDarkMode: localStorage.getItem(LocalStorageKeys.ThemeKey) === 'true',
}, (set, get) => ({
  toggleDarkMode: () => {
    localStorage.setItem(LocalStorageKeys.ThemeKey, get().isDarkMode ? 'false' : 'true');
    set(state => ({ isDarkMode: !state.isDarkMode }));
  },
})));

export default useMainStore;
