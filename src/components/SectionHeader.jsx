export default function SectionHeader({ title, subtitle, count }) {
  return (
    <header className="section-header">
      <div className="section-header__text">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {count != null && (
        <span className="section-header__count">{count} titles</span>
      )}
    </header>
  );
}
