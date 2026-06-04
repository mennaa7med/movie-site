import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { showToast } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Welcome aboard. Check your inbox for exclusive premieres.');
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__card">
        <div className="newsletter__text">
          <span className="eyebrow">Stay updated</span>
          <h2>Never miss a premiere</h2>
          <p>Weekly picks, new releases, and exclusive offers — straight to your inbox.</p>
        </div>
        <form className="news-card" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn--primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
