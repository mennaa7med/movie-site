import CatalogPage from '../components/CatalogPage';
import { upcomingMovies, sectionMeta } from '../data/content';

export default function ComingSoonPage() {
  const meta = sectionMeta.upcoming;
  return (
    <CatalogPage
      eyebrow="Coming soon"
      title={meta.title}
      subtitle={meta.subtitle}
      section="upcoming"
      items={upcomingMovies}
      className="section-upcoming section--alt"
    />
  );
}
