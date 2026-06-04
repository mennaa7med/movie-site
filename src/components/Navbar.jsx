import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/content';
import { useApp } from '../context/AppContext';
import { ROUTES } from '../utils/paths';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { search, setSearch, favorites } = useApp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to={ROUTES.home} className="logo" onClick={closeMenu}>
        <span className="logo__icon" aria-hidden="true">
          <i className="fa-solid fa-play" />
        </span>
        <span className="logo__text">
          Movies<span>Hub</span>
        </span>
      </Link>

      <div className="navbar__search">
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search titles, genres, years..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search movies and shows"
        />
        {search && (
          <button
            type="button"
            className="search-clear"
            aria-label="Clear search"
            onClick={() => setSearch('')}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        )}
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
      </button>

      <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'nav-link--active' : undefined)}
              >
                {link.label}
                {link.to === ROUTES.favorites && favorites.length > 0 && (
                  <span className="nav-badge">{favorites.length}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to={`${ROUTES.home}#newsletter`} className="nav-cta" onClick={closeMenu}>
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
