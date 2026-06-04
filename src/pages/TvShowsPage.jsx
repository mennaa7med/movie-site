import CatalogPage from '../components/CatalogPage';
import { tvShows, sectionMeta } from '../data/content';

export default function TvShowsPage() {
  const meta = sectionMeta.tv;
  return (
    <CatalogPage
      eyebrow="TV Shows"
      title={meta.title}
      subtitle={meta.subtitle}
      section="tv"
      items={tvShows}
      showRating
      className="section-tv"
    />
  );
}
