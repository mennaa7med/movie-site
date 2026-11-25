import { ROUTES } from '../utils/paths';

export const navLinks = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Movies', to: ROUTES.movies },
  { label: 'Coming Soon', to: ROUTES.comingSoon },
  { label: 'TV Shows', to: ROUTES.tvShows },
  { label: 'Watchlist', to: ROUTES.favorites },
  { label: 'About', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact },
];

export const sectionMeta = {
  popular: {
    title: 'Popular Movies',
    subtitle: 'Top-rated films trending with audiences worldwide',
    viewAll: ROUTES.movies,
  },
  upcoming: {
    title: 'Coming Soon',
    subtitle: 'Upcoming releases you will not want to miss',
    viewAll: ROUTES.comingSoon,
  },
  tv: {
    title: 'Premium TV Series',
    subtitle: 'Binge-worthy shows with exceptional critic scores',
    viewAll: ROUTES.tvShows,
  },
  favorites: {
    title: 'Your Watchlist',
    subtitle: 'Titles you have saved for later',
    viewAll: ROUTES.favorites,
  },
};

export const heroSlides = [
  {
    id: 1,
    name: 'Death on the Nile',
    title: 'Death on the Nile',
    image: `${import.meta.env.BASE_URL}image/background.jpg`,
    genres: ['Mystery', 'Crime'],
    category: 'Mystery/Crime',
    rating: 4,
    year: '2022',
    quality: '4K',
    duration: '127 min',
    description:
      'Belgian detective Hercule Poirot investigates a murder aboard a glamorous river cruise through Egypt.',
  },
  {
    id: 2,
    name: 'The Maze Runner',
    title: 'The Maze Runner',
    image: `${import.meta.env.BASE_URL}image/background_1.jpg`,
    genres: ['Sci-Fi', 'Thriller'],
    category: 'Sci-Fi/Thriller',
    rating: 4,
    year: '2014',
    quality: 'HD',
    duration: '113 min',
    description:
      'A group of teens must escape a vast, ever-changing maze after waking with no memory of the outside world.',
  },
  {
    id: 3,
    name: 'The Avengers',
    title: 'The Avengers',
    image: `${import.meta.env.BASE_URL}image/background_2.jpg`,
    genres: ['Action', 'Adventure'],
    category: 'Action/Adventure',
    rating: 4.5,
    year: '2012',
    quality: '4K',
    duration: '143 min',
    description:
      "Earth's mightiest heroes assemble to stop Loki and an alien army from enslaving humanity.",
  },
  {
    id: 4,
    name: 'Fullmetal Alchemist: Final Transmutation',
    title: 'Fullmetal Alchemist: Final Transmutation',
    image: `${import.meta.env.BASE_URL}image/background_4.jpg`,
    genres: ['Anime', 'Fantasy'],
    category: 'Anime/Fantasy',
    rating: 4,
    year: '2022',
    quality: 'HD',
    duration: '142 min',
    description:
      'The Elric brothers face their greatest challenge in a live-action conclusion to the beloved saga.',
  },
  {
    id: 5,
    name: 'Apocalypto',
    title: 'Apocalypto',
    image: `${import.meta.env.BASE_URL}image/background_5.jpg`,
    genres: ['Action', 'Drama'],
    category: 'Action/Drama',
    rating: 4.5,
    year: '2006',
    quality: 'HD',
    duration: '139 min',
    description:
      'A young Mayan hunter fights for survival as his civilization faces collapse and brutal invaders.',
  },
];

const defaultDesc =
  'Stream in stunning HD or 4K with subtitles. Join millions of viewers on MoviesHub.';

export const popularMovies = [
  { id: 1, name: 'Gajaman', quality: 'HD', year: '2023', category: 'Animation/Comedy', rating: '9.2', duration: '120 min', image: `${import.meta.env.BASE_URL}image/gajaman.jpg`, description: 'A lighthearted animated adventure following an unlikely hero in rural Sri Lanka.' },
  { id: 2, name: 'Black Panther: Wakanda Forever', quality: '4K', year: '2022', category: 'Action/Adventure', rating: '7.1', duration: '161 min', image: `${import.meta.env.BASE_URL}image/Black_Panther.webp`, description: 'The nation of Wakanda mourns its king while facing a powerful new threat from the seas.' },
  { id: 3, name: 'Interceptor', quality: 'HD', year: '2022', category: 'Action/Adventure', rating: '4.6', duration: '98 min', image: `${import.meta.env.BASE_URL}image/Interceptor.jpg`, description: 'An officer must save 217 million lives when terrorists hijack a missile defense station.' },
  { id: 4, name: 'Thor: Love and Thunder', quality: '4K', year: '2022', category: 'Action/Adventure', rating: '6.3', duration: '119 min', image: `${import.meta.env.BASE_URL}image/Thor.jpg`, description: 'Thor teams up with King Valkyrie and Jane Foster to stop Gorr the God Butcher.' },
  { id: 5, name: 'Black Adam', quality: 'HD', year: '2022', category: 'Action/Adventure', rating: '6.4', duration: '125 min', image: `${import.meta.env.BASE_URL}image/Black_Adam.jpg`, description: 'An ancient champion awakens to deliver justice in the modern world—by any means necessary.' },
].map((m) => ({ ...m, description: m.description || defaultDesc }));

export const upcomingMovies = [
  { id: 1, name: 'Plane', quality: 'HD', year: '2023', category: 'Action/Thriller', duration: '107 min', image: `${import.meta.env.BASE_URL}image/plane.jpg`, description: 'A pilot must land a commercial aircraft after a catastrophic failure in hostile territory.' },
  { id: 2, name: 'John Wick: Chapter 4', quality: '4K', year: '2023', category: 'Action/Neo-noir', duration: '169 min', image: `${import.meta.env.BASE_URL}image/john_wick.jfif`, description: 'John Wick uncovers a path to defeating the High Table—but at an even higher cost.' },
  { id: 3, name: 'Meg 2: The Trench', quality: 'HD', year: '2023', category: 'Adventure', duration: '116 min', image: `${import.meta.env.BASE_URL}image/meg.jpg`, description: 'A deep-sea expedition faces prehistoric predators bigger and deadlier than ever before.' },
  { id: 4, name: 'Aquaman and the Lost Kingdom', quality: '4K', year: '2023', category: 'Action/Fantasy', duration: '124 min', image: `${import.meta.env.BASE_URL}image/aquaman.jpg`, description: 'Aquaman must forge an uneasy alliance to protect Atlantis from a devastating revenge plot.' },
  { id: 5, name: 'Ant-Man and the Wasp: Quantumania', quality: 'HD', year: '2023', category: 'Action/Adventure', duration: '125 min', image: `${import.meta.env.BASE_URL}image/ant_man.jpg`, description: 'Scott Lang and Hope van Dyne are pulled into the unpredictable Quantum Realm.' },
].map((m) => ({ ...m, description: m.description || defaultDesc }));

export const tvShows = [
  { id: 1, name: 'Money Heist', quality: 'HD', year: '2017', category: 'Thriller', rating: '8.2', duration: '50 min/ep', image: `${import.meta.env.BASE_URL}image/money_heist.jpg`, description: 'A criminal mastermind recruits eight people to carry out ambitious heists in Spain.' },
  { id: 2, name: 'Wednesday', quality: '4K', year: '2022', category: 'Comedy', rating: '8.2', duration: '45 min/ep', image: `${import.meta.env.BASE_URL}image/wednesday.jpg`, description: 'Wednesday Addams investigates a murder spree while mastering her psychic gifts at Nevermore.' },
  { id: 3, name: '1899', quality: 'HD', year: '2022', category: 'Mystery', rating: '7.4', duration: '55 min/ep', image: `${import.meta.env.BASE_URL}image/1899.jpg`, description: 'Immigrants aboard a steamship encounter mysterious events that defy explanation.' },
  { id: 4, name: 'Game of Thrones', quality: '4K', year: '2011', category: 'Drama', rating: '9.2', duration: '57 min/ep', image: `${import.meta.env.BASE_URL}image/game_of_thrones.jpg`, description: 'Noble families vie for control of the Iron Throne in the land of Westeros.' },
  { id: 5, name: 'Arrow', quality: 'HD', year: '2012', category: 'Drama', rating: '7.5', duration: '42 min/ep', image: `${import.meta.env.BASE_URL}image/arrow.jpg`, description: 'Billionaire Oliver Queen becomes a hooded vigilante to save his corrupt city.' },
].map((m) => ({ ...m, description: m.description || defaultDesc }));

export const footerLinks = {
  browse: [
    { label: 'Popular Movies', to: ROUTES.movies },
    { label: 'Coming Soon', to: ROUTES.comingSoon },
    { label: 'TV Series', to: ROUTES.tvShows },
    { label: 'My Watchlist', to: ROUTES.favorites },
  ],
  company: [
    { label: 'About Us', to: ROUTES.about },
    { label: 'Contact', to: ROUTES.contact },
    { label: 'Home', to: ROUTES.home },
  ],
};
