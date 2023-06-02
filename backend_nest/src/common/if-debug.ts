import { runtimeMode } from '@common';

/**
 * Returns the value if the environment is development or test, otherwise undefined.
 */
export function ifDebug<T>(value: T): T | undefined {
  if (runtimeMode.isDebug) {
    return value;
  }
  return undefined;
}
