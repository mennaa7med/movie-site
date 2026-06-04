export default function PageBanner({ eyebrow, title, subtitle, children }) {
  return (
    <header className="page-banner">
      <div className="page-banner__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
    </header>
  );
}
