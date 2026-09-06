import { Monitor } from "lucide-react";
import {
  ArrowRight,
  Download,
  GitBranch,
  LinkedIn,
  Mail,
  Database,
  Server,
  Coffee,
} from "lucide-react";

// import { ArrowRight, Download, GitBranch, LinkedIn, Mail, Database, Server, Coffee } from "lucide-react";

import { translations } from "../data/translations";

function Hero({ language }) {
  const t = translations[language].hero;

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="availability">
            <span className="availability-dot"></span>
            {t.available}
          </div>

          <p className="hero-greeting">{t.greeting}</p>

          <h1>{t.name}</h1>

          <h2>{t.role}</h2>

          <p className="hero-description">
            {t.description}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              {t.projectsButton}
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
            >
              <Download size={18} />
              {t.resumeButton}
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitBranch"
            >
              <GitBranch />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >

          <div className="developer-card">

            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>BackendDeveloper.java</span>
            </div>

            <div className="code-window">

              <p>
                <span className="code-purple">public class</span>{" "}
                <span className="code-yellow">Developer</span> {"{"}
              </p>

              <p className="indent">
                <span className="code-purple">String</span> name =
                <span className="code-green"> "Kirti"</span>;
              </p>

              <p className="indent">
                <span className="code-purple">String</span> role =
                <span className="code-green">
                  {" "}
                  "Java Backend Developer"
                </span>;
              </p>

              <p className="indent">
                <span className="code-purple">String[]</span> stack = {"{"}
              </p>

              <p className="indent-two">
                <span className="code-green">
                  "Java", "Spring Boot",
                </span>
              </p>

              <p className="indent-two">
                <span className="code-green">
                  "Kafka", "Redis", "MySQL"
                </span>
              </p>

              <p className="indent">{"};"}</p>

              <p>{"}"}</p>

            </div>
          </div>

          <div className="floating-icon icon-java">
            <Coffee />
          </div>

          <div className="floating-icon icon-db">
            <Database />
          </div>

          <div className="floating-icon icon-server">
            <Server />
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;