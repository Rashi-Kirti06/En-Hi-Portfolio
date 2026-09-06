import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

function Education({ language }) {
  const t = translations[language].education;

  return (
    <section
      id="education"
      className="section alt-section"
    >
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <div className="education-card">

          <div className="education-icon">
            <GraduationCap size={34} />
          </div>

          <div>
            <h3>{t.degree}</h3>

            <h4>{t.course}</h4>

            <p>{t.college}</p>

            <span>{t.year}</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;