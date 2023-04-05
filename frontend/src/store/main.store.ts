import {create} from "zustand";
import {combine} from "zustand/middleware";

const useMainStore = create(combine({
      isDarkMode: false,
    }, (set) => ({
        toggleDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),
    })
));

export default useMainStore;
