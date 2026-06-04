export const ROUTES = {
  home: '/',
  movies: '/movies',
  comingSoon: '/coming-soon',
  tvShows: '/tv-shows',
  favorites: '/favorites',
  about: '/about',
  contact: '/contact',
  title: (section, id) => `/title/${section}/${id}`,
  watch: (section, id) => `/watch/${section}/${id}`,
};
