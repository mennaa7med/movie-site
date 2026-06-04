import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import TvShowsPage from './pages/TvShowsPage';
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TitleDetailPage from './pages/TitleDetailPage';
import WatchPage from './pages/WatchPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './utils/paths';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.movies} element={<MoviesPage />} />
        <Route path={ROUTES.comingSoon} element={<ComingSoonPage />} />
        <Route path={ROUTES.tvShows} element={<TvShowsPage />} />
        <Route path={ROUTES.favorites} element={<FavoritesPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        <Route path="/title/:section/:id" element={<TitleDetailPage />} />
        <Route path="/watch/:section/:id" element={<WatchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
