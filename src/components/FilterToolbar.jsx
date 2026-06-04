import { useApp } from '../context/AppContext';

export default function FilterToolbar({ genres }) {
  const { genre, setGenre, sortBy, setSortBy, search } = useApp();

  return (
    <div className="filter-toolbar">
      <div className="filter-toolbar__inner">
        <div className="filter-toolbar__head">
          <h3>Browse catalog</h3>
          {search && <span className="filter-toolbar__hint">Filtering results</span>}
        </div>
        <div className="filter-toolbar__body">
          <div className="filter-toolbar__genres">
            {genres.map((g) => (
              <button
                key={g}
                type="button"
                className={`genre-chip ${genre === g ? 'genre-chip--active' : ''}`}
                onClick={() => setGenre(g)}
              >
                {g === 'all' ? 'All genres' : g}
              </button>
            ))}
          </div>
          <label className="sort-select">
            <span>Sort</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Featured</option>
              <option value="rating">Top rated</option>
              <option value="year">Newest</option>
              <option value="name">A–Z</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
