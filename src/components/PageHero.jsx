export default function PageHero({ eyebrow, title, description, index, note }) {
  return (
    <header className="studio-page-header">
      <div className="studio-container page-hero-grid">
        <div className="page-hero-copy">
          <span className="studio-eyebrow">{eyebrow}</span>
          <h1 className="page-header-title">{title}</h1>
          <p className="page-header-desc">{description}</p>
        </div>

        <aside className="page-hero-signature" aria-label={note}>
          <span className="page-hero-index">{index}</span>
          <span className="page-hero-line" />
          <p>{note}</p>
        </aside>
      </div>
    </header>
  );
}
