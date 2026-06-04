import {
  heroSlides,
  popularMovies,
  upcomingMovies,
  tvShows,
} from '../data/content';

const catalogs = {
  popular: popularMovies,
  upcoming: upcomingMovies,
  tv: tvShows,
  hero: heroSlides,
};

export const sectionShowRating = {
  popular: true,
  upcoming: false,
  tv: true,
  hero: true,
};

export function getCatalog(section) {
  return catalogs[section] ?? [];
}

export function getAllCatalogItems() {
  return Object.entries(catalogs).flatMap(([section, items]) =>
    items.map((item) => ({ item, section, showRating: sectionShowRating[section] }))
  );
}

export function findTitle(section, id) {
  const numId = Number(id);
  const item = getCatalog(section).find((entry) => entry.id === numId);
  if (!item) return null;
  return {
    item,
    section,
    showRating: sectionShowRating[section] ?? false,
  };
}

export function titlePath(section, id) {
  return `/title/${section}/${id}`;
}

export function watchPath(section, id) {
  return `/watch/${section}/${id}`;
}
