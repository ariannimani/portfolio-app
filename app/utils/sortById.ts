export function sortById<T extends { id: number }>(items: T[]): T[] {
  return items.sort((a, b) => b.id - a.id);
}
