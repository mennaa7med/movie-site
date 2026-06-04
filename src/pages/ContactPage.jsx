import ContactSection from '../components/ContactSection';
import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  return (
    <main className="main-content main-content--page">
      <PageBanner
        eyebrow="Support"
        title="Contact us"
        subtitle="We typically respond within one business day."
      />
      <ContactSection standalone />
    </main>
  );
}
