import { useState } from 'react';

export const useSwitcher = (initialState = false) => {
  const [state, setState] = useState(initialState);
  return {
    state,
    toggle: () => setState(!state),
    enable: () => setState(true),
    disable: () => setState(false),
  };
};
