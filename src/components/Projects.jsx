import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionTitle from "./SectionTitle";
import { translations } from "../data/translations";

const projects = [
  {
    title: "Ticket Booking System",

    descriptionEn:
    "Ticket Booking System allows users to select available seats and book tickets easily. It stores and manages booking details and seat availability in the database.",
    descriptionHi:
    "टिकट बुकिंग सिस्टम यूज़र्स को उपलब्ध सीट चुनकर आसानी से टिकट बुक करने की सुविधा देता है। यह बुकिंग की जानकारी और सीट की उपलब्धता को डेटाबेस में मैनेज करता है।",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
        "JPA",
      "JSP",
        "HTML, CSS",
      "REST API",
    ],

    github:
    "https://github.com/Rashi-Kirti06/TicketBookingApplication.git",
    live: "https://github.com/Rashi-Kirti06/TicketBookingApplication.git",
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
    title: "DocSearch-Role Based",

    descriptionEn:
    "User Registration: Stores employee details securely in MySQL. Role-Based Access: Controls document access based on user roles.",
    descriptionHi:
    "User Registration: नए कर्मचारियों की जानकारी लेकर उसे MySQL में सुरक्षित रूप से स्टोर करता है। Role-Based Search: यूज़र की भूमिका के आधार पर उसे केवल अधिकृत दस्तावेज़ों को खोजने और एक्सेस करने देता है।",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "JWT",
        "JPA",
        "JSP",
    ],

    github: "https://github.com/Rashi-Kirti06/docSearchRoleBased.git",
    live: "https://github.com/Rashi-Kirti06/docSearchRoleBased.git",
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