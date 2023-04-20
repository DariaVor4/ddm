// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const _throw = (error: Error) => () => {
  throw error;
};

export default _throw;
