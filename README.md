# MoviesHub

Modern streaming-style web app for browsing movies, upcoming releases, and TV series. Built with **React 19**, **Vite**, and **React Router**.

**Live demo:** https://mennaa7med.github.io/movie-site/

## Features

- Hero slider with featured titles (Swiper)
- Catalog pages: Movies, Coming Soon, TV Shows
- Title detail and watch pages
- Favorites watchlist (persisted in `localStorage`)
- Genre filtering and search on catalog pages
- Responsive layout with dark cinematic UI

## Tech stack

| Layer        | Technology        |
| ------------ | ----------------- |
| UI           | React 19          |
| Build        | Vite 6            |
| Routing      | React Router 7    |
| Carousel     | Swiper 11         |
| Styling      | CSS (custom)      |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node)

### Install & run

```bash
git clone https://github.com/mennaa7med/movie-site.git
cd movie-site
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run build`   | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Project structure

```
├── public/          # Static assets (if any)
├── src/
│   ├── components/  # Reusable UI
│   ├── context/     # App state (favorites)
│   ├── data/        # Mock content
│   ├── pages/       # Route pages
│   ├── styles/      # Global styles
│   └── utils/       # Helpers & routes
├── index.html
├── package.json
└── vite.config.js
```

## Deploy

After `npm run build`, deploy the `dist/` folder to any static host (e.g. [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com)).

## License

MIT — see [LICENSE](LICENSE).
