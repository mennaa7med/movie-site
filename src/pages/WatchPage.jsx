import { Link, useParams } from 'react-router-dom';
import { findTitle, titlePath } from '../utils/catalog';
import { ROUTES } from '../utils/paths';

export default function WatchPage() {
  const { section, id } = useParams();
  const entry = findTitle(section, id);

  if (!entry) {
    return (
      <main className="main-content main-content--page">
        <div className="empty-state">
          <h1>Video unavailable</h1>
          <Link to={ROUTES.home} className="btn btn--primary">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const { item } = entry;

  return (
    <main className="watch-page">
      <div className="watch-page__player">
        <div className="watch-page__placeholder">
          <i className="fa-solid fa-play" aria-hidden="true" />
          <p>Now playing</p>
          <h1>{item.name}</h1>
          <span>{item.quality} · {item.duration}</span>
        </div>
      </div>

      <div className="watch-page__bar">
        <div className="watch-page__bar-inner">
          <Link to={titlePath(section, item.id)} className="btn btn--ghost">
            <i className="fa-solid fa-circle-info" aria-hidden="true" />
            More info
          </Link>
          <Link to={ROUTES.home} className="btn btn--outline">
            <i className="fa-solid fa-house" aria-hidden="true" />
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
