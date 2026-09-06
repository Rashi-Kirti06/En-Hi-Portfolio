import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

const projects = [
  {
    title: "Ticket Booking System",

    descriptionEn:
      "Backend ticket booking application built using Spring Boot with MySQL persistence, Redis caching and Kafka-based event communication.",

    descriptionHi:
      "Spring Boot से बनाया गया backend ticket booking application जिसमें MySQL persistence, Redis caching और Kafka event communication का उपयोग किया गया है।",

    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Kafka",
      "REST API",
    ],

    github:
      "https://github.com/YOUR_USERNAME/ticket-booking-system",

    live: "#",
  },

  {
    title: "Employee Management API",

    descriptionEn:
      "RESTful employee management backend with CRUD operations, validation, exception handling and MySQL database integration.",

    descriptionHi:
      "CRUD operations, validation, exception handling और MySQL integration के साथ बनाया गया RESTful employee management backend।",

    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "MySQL",
    ],

    github:
      "https://github.com/YOUR_USERNAME/employee-management",

    live: "#",
  },

  {
    title: "E-Commerce Backend",

    descriptionEn:
      "Backend API architecture for products, users, orders and authentication designed using Spring Boot.",

    descriptionHi:
      "Spring Boot का उपयोग करके products, users, orders और authentication के लिए बनाया गया backend architecture।",

    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "JWT",
    ],

    github: "#",
    live: "#",
  },
];

function Projects({ language }) {
  const t = translations[language].projects;

  return (
    <section
      id="projects"
      className="section alt-section"
    >
      <div className="container">

        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
        />

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
            >

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>
                {language === "en"
                  ? project.descriptionEn
                  : project.descriptionHi}
              </p>

              <div className="project-tech">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="project-actions">

                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  {t.code}
                </a> */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={18} />
                  {t.details}
                </a>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;