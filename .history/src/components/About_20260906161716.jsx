import { motion } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

function About({ language }) {
  const t = translations[language].about;

  return (
    <section id="about" className="section alt-section">
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <div className="about-grid">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>{t.text1}</p>
            <p>{t.text2}</p>
            <p>{t.text3}</p>
          </motion.div>

          <div className="about-cards">

            <div className="mini-card">
              <Server />
              <h3>Frontedn</h3>
              <p>Apache Kafka</p>
            </div>

            <div className="mini-card">
              <Code2 />
              <h3>Backend</h3>
              <p>Java & Spring Boot</p>
            </div>

            <div className="mini-card">
              <Database />
              <h3>Database</h3>
              <p>MySQL & Redis</p>
            </div>
            

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;