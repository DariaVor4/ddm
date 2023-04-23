import { runtimeMode } from '@common';

/**
 * Returns the value if the environment is development or test, otherwise undefined.
 */
export default function ifDebug<T>(value: T): T | void {
  if (runtimeMode.isDebug) {
    return value;
  }
  return undefined;
}
