import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { filterAndSort, getGenresFromItems } from '../utils/filters';
import FilterToolbar from './FilterToolbar';
import MovieSection from './MovieSection';
import PageBanner from './PageBanner';

export default function CatalogPage({
  eyebrow,
  title,
  subtitle,
  section,
  items,
  showRating = false,
  className = '',
}) {
  const { search, genre, sortBy } = useApp();

  const genres = useMemo(() => getGenresFromItems(items), [items]);

  const filtered = useMemo(
    () => filterAndSort(items, { search, genre, sortBy }),
    [items, search, genre, sortBy]
  );

  return (
    <main className="main-content main-content--page">
      <PageBanner eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <FilterToolbar genres={genres} />
      <MovieSection
        items={filtered}
        section={section}
        showRating={showRating}
        className={className}
        hideHeader
      />
    </main>
  );
}
