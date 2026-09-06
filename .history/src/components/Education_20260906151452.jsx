import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

const technologies = [
  "Advanced Java",
  "Microservices",
  "System Design",
  "Docker",
  "Spring Security",
  "Cloud",
];

function Learning({ language }) {
  const t = translations[language].learning;

  return (
    <section className="section">
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <p className="learning-description">
          {t.description}
        </p>

        <div className="learning-grid">

          {technologies.map((technology, index) => (

            <motion.div
              className="learning-card"
              key={technology}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <span>{index + 1}</span>
              {technology}
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Learning