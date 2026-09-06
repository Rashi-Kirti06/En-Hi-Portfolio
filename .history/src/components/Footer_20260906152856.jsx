// import { Coffee } from "lucide-react";
import { }
import { translations } from "../data/translations";

function Footer({ language }) {
  const t = translations[language].footer;

  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-logo">
          <Coffee size={22} />
          Kirti.dev
        </div>

        <p>
          © {new Date().getFullYear()} Kirti Tripathi
        </p>

        <p>{t.text}</p>

      </div>
    </footer>
  );
}

export default Footer;