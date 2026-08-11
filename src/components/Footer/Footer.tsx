import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-left">

          <p>
            © {new Date().getFullYear()} Keisha Dumpit · Made with curiosity.
          </p>

          <a href="#home">
            Back to the beginning
          </a>

        </div>

        <a href="#home" className="back-top">

          <FaArrowUp />

        </a>

      </div>

    </footer>
  );
}

export default Footer;