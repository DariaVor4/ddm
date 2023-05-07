import { useState } from 'react';

const useSwitcher = (initialState = false) => {
  const [state, setState] = useState(initialState);
  return {
    state,
    toggle: () => setState(!state),
    enable: () => setState(true),
    disable: () => setState(false),
  };
};

export default useSwitcher;
