import {
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

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
              href="mailto:tripathi17kirti@example.com"
              className="contact-card"
            >
              <Mail />
              <span>{t.email}</span>
            </a>

            <a
              href="http://linkedin.com/in/kirti-tripathi062214"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin style={{ color: '#0077b5' }} />
              <span>{t.linkedin}</span>
            </a>

            <a
              href="https://github.com/Rashi-Kirti06"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaGithub style={{ color: '#333' }} />
              <span>{t.github}</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;