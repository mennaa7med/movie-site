import CatalogPage from '../components/CatalogPage';
import { popularMovies, sectionMeta } from '../data/content';

export default function MoviesPage() {
  const meta = sectionMeta.popular;
  return (
    <CatalogPage
      eyebrow="Movies"
      title={meta.title}
      subtitle={meta.subtitle}
      section="popular"
      items={popularMovies}
      showRating
      className="section-popular"
    />
  );
}
