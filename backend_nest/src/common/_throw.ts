/**
 * Предоставляет возможность краткого выбрасывания ошибки в контексте Promise, например:
 * Promise.catch(_throw(new Error('Some error')))
 */
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
export default function _throw(error: Error) {
  return () => {
    throw error;
  };
}
