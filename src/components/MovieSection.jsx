import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import SectionHeader from './SectionHeader';
import { sectionMeta } from '../data/content';

export default function MovieSection({
  title,
  subtitle,
  items,
  section,
  showRating = false,
  className = '',
  id,
  viewAllTo,
  hideHeader = false,
}) {
  const meta = sectionMeta[section];
  const heading = title || meta?.title;
  const desc = subtitle || meta?.subtitle;
  const viewAll = viewAllTo || meta?.viewAll;

  return (
    <section className={`movie-section ${className}`.trim()} id={id}>
      <div className="movie-section__inner">
        {!hideHeader && (
          <div className="section-header-row">
            <SectionHeader title={heading} subtitle={desc} count={items.length} />
            {viewAll && (
              <Link to={viewAll} className="view-all-link">
                View all <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            )}
          </div>
        )}
        {items.length === 0 ? (
          <p className="empty-message">No titles match your search or filter.</p>
        ) : (
          <div className="movie-grid">
            {items.map((item) => (
              <MovieCard
                key={`${section}-${item.id}`}
                item={item}
                section={section}
                showRating={showRating}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
