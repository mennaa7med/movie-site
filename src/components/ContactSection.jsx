import { useState } from 'react';
import { useApp } from '../context/AppContext';

const contactInfo = [
  { icon: 'fa-solid fa-envelope', label: 'hello@movieshub.com' },
  { icon: 'fa-solid fa-phone', label: '+1 (800) 555-0199' },
  { icon: 'fa-solid fa-location-dot', label: 'New York, USA' },
];

export default function ContactSection({ standalone = false }) {
  const { showToast } = useApp();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent. Our team will respond within 24 hours.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      className={`info-section info-section--contact ${standalone ? 'info-section--standalone' : ''}`}
      id={standalone ? undefined : 'contact'}
    >
      <div className="info-section__inner">
        <div className="contact-grid">
          <div className="contact-grid__info">
            {!standalone && (
              <>
                <span className="eyebrow">Get in touch</span>
                <h2>Contact our team</h2>
              </>
            )}
            <p>Questions about membership, partnerships, or support? We are here to help.</p>
            <ul className="contact-list">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <i className={item.icon} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button type="submit" className="btn btn--primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
