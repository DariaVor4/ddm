export function onEnterDown(callback: () => unknown) {
  return (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      callback();
    }
  };
}
