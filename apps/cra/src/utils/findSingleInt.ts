/**
 * const arr = [10, 2, 2 , 1, 0, 0, 10]
 * findSingle(arr) // 1
 *
 *
 */

export function findSingle(arr: number[]): number {
  // x ^ x = 0
  // 0 ^ x = x
  // eslint-disable-next-line no-bitwise
  return arr.reduce((a, b) => a ^ b);
}
