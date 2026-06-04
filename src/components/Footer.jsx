import { Link } from 'react-router-dom';
import { footerLinks } from '../data/content';
import { ROUTES } from '../utils/paths';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to={ROUTES.home} className="logo logo--footer">
            <span className="logo__icon" aria-hidden="true">
              <i className="fa-solid fa-play" />
            </span>
            <span className="logo__text">
              Movies<span>Hub</span>
            </span>
          </Link>
          <p>Premium streaming for films and television. Curated. HD & 4K.</p>
          <div className="site-footer__social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="site-footer__links">
          <div>
            <h4>Browse</h4>
            <ul>
              {footerLinks.browse.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {year} MoviesHub. All rights reserved.</p>
        <p className="site-footer__credit">
          Designed by <span>Menna Ahmed</span>
        </p>
      </div>
    </footer>
  );
}
