/**
 * Takes an array of plain & conditional class names and joins them.
 * Removes any empty/false/invalid items.
 */
export function joinClasses<T>(classes: T[]) {
  return classes.filter((s) => s && typeof s === 'string').join(' ');
}
