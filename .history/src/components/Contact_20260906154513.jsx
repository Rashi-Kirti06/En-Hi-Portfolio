import {
  Mail,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

function Contact({ language }) {
  const t = translations[language].contact;

  return (
    <section id="contact" className="section">
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <div className="contact-box">

          <p>{t.description}</p>

          <div className="contact-links">

            <a
              href="mailto:your-email@example.com"
              className="contact-card"
            >
              <Mail />
              <span>{t.email}</span>
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Linkedin
              <span>{t.linkedin}</span>
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              Github
              <span>{t.github}</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;