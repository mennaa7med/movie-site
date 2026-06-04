import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/paths';

export default function NotFoundPage() {
  return (
    <main className="main-content main-content--page">
      <div className="empty-state empty-state--large">
        <span className="empty-state__code">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or was moved.</p>
        <div className="empty-state__actions">
          <Link to={ROUTES.home} className="btn btn--primary">
            Go home
          </Link>
          <Link to={ROUTES.movies} className="btn btn--outline">
            Browse movies
          </Link>
        </div>
      </div>
    </main>
  );
}
