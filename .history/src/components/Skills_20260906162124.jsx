import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Database & Messaging",
    skills: [
      "MySQL",
      "SQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Azure",
      "VS Code",
      "JIRA",
      "AWS",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      "Object-Oriented Programming(OOP)",
      "Data Structure and Algorithm(DSA",
      "Design Patterns",
      "Exception Handling",
      "Database Design",
      "REST Architecture",
    ],
  },
];
, Object-Oriented Programming(OOPS),
Software Development LifeCycle(SDLC), Agile Methodology, Database
Management System, System Design, Operating System


function Skills({ language }) {
  const t = translations[language].skills;

  return (
    <section id="skills" className="section">
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;