/**
 * A simplified assert, which on a false condition,
 *    will throw an exception instance of the
 *    exact class that was passed to it.
 * It fixes incompatibility with tests.
 */
export function assert(condition: unknown, error: Error): asserts condition {
  if (!condition) {
    throw error;
  }
}
