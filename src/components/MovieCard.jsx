import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { titlePath, watchPath } from '../utils/catalog';

export default function MovieCard({ item, section, showRating = false }) {
  const { isFavorite, toggleFavorite } = useApp();
  const favorited = isFavorite(section, item.id);

  return (
    <article className="movie-card">
      {showRating && item.rating && (
        <span className="movie-card__rating-badge">
          <i className="fa-solid fa-star" aria-hidden="true" />
          {item.rating}
        </span>
      )}

      <button
        type="button"
        className={`favorite-btn ${favorited ? 'favorite-btn--active' : ''}`}
        aria-label={favorited ? 'Remove from watchlist' : 'Add to watchlist'}
        onClick={() => toggleFavorite({ item, section, showRating })}
      >
        <i className={favorited ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} aria-hidden="true" />
      </button>

      <Link to={titlePath(section, item.id)} className="movie-card__trigger">
        <div className="movie-card__details">
          <div className="movie-card__left">
            <p className="name">{item.name}</p>
            <div className="date_quality">
              <p className="quality">{item.quality}</p>
              <p className="date">{item.year}</p>
            </div>
            <p className="category">{item.category}</p>
            <div className="info">
              {showRating && item.rating && (
                <div className="rate">
                  <i className="fa-solid fa-star" aria-hidden="true" />
                  <p>{item.rating}</p>
                </div>
              )}
              <div className="time">
                <i className="fa-regular fa-clock" aria-hidden="true" />
                <p>{item.duration}</p>
              </div>
            </div>
          </div>
          <span className="movie-card__play" aria-hidden="true">
            <i className="fa-solid fa-play" />
          </span>
        </div>
        <img src={item.image} alt={item.name} loading="lazy" />
      </Link>

      <Link
        to={watchPath(section, item.id)}
        className="movie-card__watch-link"
        aria-label={`Watch ${item.name}`}
      >
        Watch
      </Link>
    </article>
  );
}
