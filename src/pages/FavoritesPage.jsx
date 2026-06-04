import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { matchesGenre, matchesSearch, getGenresFromItems } from '../utils/filters';
import MovieCard from '../components/MovieCard';
import FilterToolbar from '../components/FilterToolbar';
import PageBanner from '../components/PageBanner';
import { sectionMeta } from '../data/content';
import { ROUTES } from '../utils/paths';

function sortFavorites(list, sortBy) {
  const sorted = [...list];
  switch (sortBy) {
    case 'rating':
      return sorted.sort(
        (a, b) => parseFloat(b.item.rating || 0) - parseFloat(a.item.rating || 0)
      );
    case 'year':
      return sorted.sort((a, b) => Number(b.item.year) - Number(a.item.year));
    case 'name':
      return sorted.sort((a, b) => a.item.name.localeCompare(b.item.name));
    default:
      return sorted;
  }
}

export default function FavoritesPage() {
  const { favorites, search, genre, sortBy } = useApp();
  const meta = sectionMeta.favorites;

  const genres = useMemo(
    () => getGenresFromItems(favorites.map((f) => f.item)),
    [favorites]
  );

  const displayed = useMemo(() => {
    const filtered = favorites.filter(
      (f) => matchesSearch(f.item, search) && matchesGenre(f.item, genre)
    );
    return sortFavorites(filtered, sortBy);
  }, [favorites, search, genre, sortBy]);

  return (
    <main className="main-content main-content--page">
      <PageBanner eyebrow="Watchlist" title={meta.title} subtitle={meta.subtitle} />
      <FilterToolbar genres={['all', ...genres.filter((g) => g !== 'all')]} />

      <section className="movie-section section-favorites">
        <div className="movie-section__inner">
          {favorites.length === 0 ? (
            <div className="empty-state">
              <i className="fa-regular fa-heart" aria-hidden="true" />
              <p>Your watchlist is empty.</p>
              <Link to={ROUTES.movies} className="btn btn--primary">
                Browse movies
              </Link>
            </div>
          ) : displayed.length === 0 ? (
            <p className="empty-message">No watchlist items match your filters.</p>
          ) : (
            <div className="movie-grid">
              {displayed.map((entry) => (
                <MovieCard
                  key={entry.key}
                  item={entry.item}
                  section={entry.section}
                  showRating={entry.showRating}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
