const runtimeMode = {
  isDev: import.meta.env.MODE === 'development',
  isProd: import.meta.env.MODE === 'production',
};

export default runtimeMode;
