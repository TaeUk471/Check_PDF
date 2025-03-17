export const filterNameItems = <T extends { name: string }>(query: string, items: T[]): T[] => {
  if (!query) return items;

  return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
};
