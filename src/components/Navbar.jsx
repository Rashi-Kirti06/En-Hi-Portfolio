import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { translations } from "../data/translations";

function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = translations[language].navbar;

  const links = [
    ["home", t.home],
    ["about", t.about],
    ["skills", t.skills],
    ["projects", t.projects],
    ["education", t.education],
    ["contact", t.contact],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          <Coffee size={28} />
          <span>Kirti.dev</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <div className="language-mobile">
            <button
              className={language === "en" ? "lang-active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>

            <span>/</span>

            <button
              className={language === "hi" ? "lang-active" : ""}
              onClick={() => setLanguage("hi")}
            >
              हिंदी
            </button>
          </div>
        </nav>

        <div className="nav-actions">
          <div className="language-switcher">
            <button
              className={language === "en" ? "lang-active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>

            <span>/</span>

            <button
              className={language === "hi" ? "lang-active" : ""}
              onClick={() => setLanguage("hi")}
            >
              हिंदी
            </button>
          </div>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;