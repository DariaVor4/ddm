const onEnterDown = (callback: () => unknown) => (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    callback();
  }
};

export default onEnterDown;
