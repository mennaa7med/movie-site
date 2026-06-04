const features = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Instant streaming',
    text: 'Start watching in seconds with adaptive quality up to 4K.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Secure platform',
    text: 'Your data and preferences are protected with industry standards.',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Every device',
    text: 'Seamless experience on desktop, tablet, and mobile.',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Personal watchlist',
    text: 'Save titles you love and pick up where you left off.',
  },
];

export default function AboutSection({ standalone = false }) {
  return (
    <section className={`info-section info-section--about ${standalone ? 'info-section--standalone' : ''}`} id={standalone ? undefined : 'about'}>
      <div className="info-section__inner">
        <div className="about-grid">
          {!standalone && (
            <div className="about-grid__content">
              <span className="eyebrow">About MoviesHub</span>
              <h2>The home for cinematic entertainment</h2>
              <p>
                MoviesHub brings together blockbuster films, exclusive premieres, and
                award-winning series in one refined streaming experience.
              </p>
            </div>
          )}
          {standalone && (
            <div className="about-grid__content about-grid__content--full">
              <p>
                MoviesHub brings together blockbuster films, exclusive premieres, and
                award-winning series in one refined streaming experience. Discover,
                save, and enjoy content tailored to your taste.
              </p>
              <div className="info-stats">
                <div className="stat">
                  <strong>500+</strong>
                  <span>Movies</span>
                </div>
                <div className="stat">
                  <strong>200+</strong>
                  <span>TV Shows</span>
                </div>
                <div className="stat">
                  <strong>4K</strong>
                  <span>Quality</span>
                </div>
              </div>
            </div>
          )}
          <div className="feature-grid">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <i className={f.icon} aria-hidden="true" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
