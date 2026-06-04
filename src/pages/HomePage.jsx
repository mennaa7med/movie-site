import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import TrustBar from '../components/TrustBar';
import MovieSection from '../components/MovieSection';
import FilterToolbar from '../components/FilterToolbar';
import Newsletter from '../components/Newsletter';
import { useApp } from '../context/AppContext';
import { filterAndSort, getGenresFromItems } from '../utils/filters';
import { popularMovies, upcomingMovies, tvShows } from '../data/content';
import { ROUTES } from '../utils/paths';

export default function HomePage() {
  const { hash } = useLocation();
  const { search, genre, sortBy } = useApp();

  useEffect(() => {
    if (hash === '#newsletter') {
      document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const genres = useMemo(
    () => getGenresFromItems(popularMovies, upcomingMovies, tvShows),
    []
  );

  const filters = { search, genre, sortBy };

  const filteredPopular = useMemo(
    () => filterAndSort(popularMovies, filters),
    [search, genre, sortBy]
  );
  const filteredUpcoming = useMemo(
    () => filterAndSort(upcomingMovies, filters),
    [search, genre, sortBy]
  );
  const filteredTv = useMemo(
    () => filterAndSort(tvShows, filters),
    [search, genre, sortBy]
  );

  return (
    <>
      <section className="hero-section">
        <HeroSlider />
        <TrustBar />
      </section>

      <main className="main-content">
        <FilterToolbar genres={genres} />

        <MovieSection
          items={filteredPopular}
          section="popular"
          showRating
          className="section-popular"
          viewAllTo={ROUTES.movies}
        />

        <MovieSection
          items={filteredUpcoming}
          section="upcoming"
          className="section-upcoming section--alt"
          viewAllTo={ROUTES.comingSoon}
        />

        <MovieSection
          items={filteredTv}
          section="tv"
          showRating
          className="section-tv"
          viewAllTo={ROUTES.tvShows}
        />

        <section className="home-cta">
          <div className="home-cta__inner">
            <h2>Build your personal watchlist</h2>
            <p>Save titles you love and access them anytime from your watchlist page.</p>
            <Link to={ROUTES.favorites} className="btn btn--primary">
              Go to watchlist
            </Link>
          </div>
        </section>

        <Newsletter />
      </main>
    </>
  );
}
