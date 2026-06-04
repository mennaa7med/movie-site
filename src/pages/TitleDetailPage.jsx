import { Link, useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { findTitle, watchPath } from '../utils/catalog';
import StarRating from '../components/StarRating';
import { ROUTES } from '../utils/paths';

export default function TitleDetailPage() {
  const { section, id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useApp();

  const entry = findTitle(section, id);

  if (!entry) {
    return (
      <main className="main-content main-content--page">
        <div className="empty-state">
          <h1>Title not found</h1>
          <p>This movie or show does not exist in our catalog.</p>
          <Link to={ROUTES.home} className="btn btn--primary">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const { item, showRating } = entry;
  const favorited = isFavorite(section, item.id);
  const ratingNum = parseFloat(item.rating) || 4;

  return (
    <main className="title-page">
      <div
        className="title-page__hero"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="title-page__hero-overlay">
          <button type="button" className="title-page__back" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" /> Back
          </button>
          <span className="slide-badge">Now streaming</span>
          <h1>{item.name}</h1>
          <div className="title-page__meta">
            <span className="quality">{item.quality}</span>
            <span>{item.year}</span>
            <span>{item.duration}</span>
            {showRating && item.rating && (
              <span className="modal__rating">
                <i className="fa-solid fa-star" aria-hidden="true" /> {item.rating}
              </span>
            )}
          </div>
          {item.rating && <StarRating rating={ratingNum} />}
          <p className="title-page__category">{item.category}</p>
          <div className="slide-actions">
            <Link to={watchPath(section, item.id)} className="btn btn--primary btn--lg">
              <i className="fa-solid fa-play" aria-hidden="true" />
              Watch now
            </Link>
            <button
              type="button"
              className={`btn btn--ghost btn--lg ${favorited ? 'btn--favorited' : ''}`}
              onClick={() => toggleFavorite(entry)}
            >
              <i className={favorited ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} aria-hidden="true" />
              {favorited ? 'In watchlist' : 'Add to watchlist'}
            </button>
          </div>
        </div>
      </div>

      <div className="title-page__body">
        <div className="title-page__inner">
          <section>
            <h2>Overview</h2>
            <p>{item.description}</p>
          </section>
          <section>
            <h2>Details</h2>
            <dl className="detail-list">
              <div>
                <dt>Genre</dt>
                <dd>{item.category}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{item.year}</dd>
              </div>
              <div>
                <dt>Quality</dt>
                <dd>{item.quality}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{item.duration}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </main>
  );
}
