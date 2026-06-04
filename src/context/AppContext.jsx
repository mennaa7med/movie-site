import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { favoriteKey } from '../utils/filters';

const STORAGE_KEY = 'movieshub-favorites';

const AppContext = createContext(null);

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function AppProvider({ children }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState(loadFavorites);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const showToast = useCallback((message) => {
    setToast(message);
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, []);

  const isFavorite = useCallback(
    (section, id) => favorites.some((f) => f.key === favoriteKey(section, id)),
    [favorites]
  );

  const toggleFavorite = useCallback((entry) => {
    const key = favoriteKey(entry.section, entry.item.id);
    setFavorites((prev) => {
      const exists = prev.some((f) => f.key === key);
      if (exists) {
        showToast(`Removed "${entry.item.name}" from favorites`);
        return prev.filter((f) => f.key !== key);
      }
      showToast(`Added "${entry.item.name}" to favorites`);
      return [...prev, { key, ...entry }];
    });
  }, [showToast]);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      genre,
      setGenre,
      sortBy,
      setSortBy,
      favorites,
      isFavorite,
      toggleFavorite,
      toast,
      showToast,
    }),
    [search, genre, sortBy, favorites, isFavorite, toggleFavorite, toast, showToast]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
