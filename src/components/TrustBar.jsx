const highlights = [
  { icon: 'fa-solid fa-film', label: '500+ Movies' },
  { icon: 'fa-solid fa-tv', label: '200+ TV Shows' },
  { icon: 'fa-solid fa-closed-captioning', label: 'Subtitles' },
  { icon: 'fa-solid fa-display', label: '4K Ultra HD' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__inner">
        {highlights.map((item) => (
          <div key={item.label} className="trust-bar__item">
            <i className={item.icon} aria-hidden="true" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
