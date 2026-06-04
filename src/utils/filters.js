export function matchesSearch(item, query) {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    item.name.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.year?.includes(q)
  );
}

export function matchesGenre(item, genre) {
  if (!genre || genre === 'all') return true;
  return item.category.toLowerCase().includes(genre.toLowerCase());
}

export function sortItems(items, sortBy) {
  const list = [...items];
  switch (sortBy) {
    case 'rating':
      return list.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    case 'year':
      return list.sort((a, b) => Number(b.year) - Number(a.year));
    case 'name':
      return list.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return list;
  }
}

export function filterAndSort(items, { search, genre, sortBy }) {
  return sortItems(
    items.filter((item) => matchesSearch(item, search) && matchesGenre(item, genre)),
    sortBy
  );
}

export function getGenresFromItems(...lists) {
  const genres = new Set();
  lists.flat().forEach((item) => {
    item.category.split('/').forEach((g) => genres.add(g.trim()));
  });
  return ['all', ...Array.from(genres).sort()];
}

export function favoriteKey(section, id) {
  return `${section}-${id}`;
}
