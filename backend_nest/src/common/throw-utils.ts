/**
 * Предоставляет возможность краткого выбрасывания ошибки в контексте Promise, например:
 * Promise.catch(_throw(new NotFoundException('Not found...')))
 * Promise.catch(_throw((e) => new Error(`Something went wrong on entity update: ${e.message}`)))
 */
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
export function throwCb(error: Error | ((err: Error) => Error)) {
  return (originalError: Error) => {
    throw error instanceof Error ? error : error(originalError);
  };
}

export function elseThrow(error: Error | string): never {
  throw error instanceof Error ? error : new Error(error);
}
