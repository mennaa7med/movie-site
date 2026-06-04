import AboutSection from '../components/AboutSection';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  return (
    <main className="main-content main-content--page">
      <PageBanner
        eyebrow="Company"
        title="About MoviesHub"
        subtitle="Premium streaming for films and television — curated for every screen."
      />
      <AboutSection standalone />
    </main>
  );
}
