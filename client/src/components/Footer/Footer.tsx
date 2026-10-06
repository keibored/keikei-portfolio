export default function Footer() {
  return (
    <footer className="footer container">
      <a
        className="footer-logo"
        href="#home"
        aria-label="Keisha Dumpit, back to top"
      >
        K.
      </a>
      <p className="footer-credit">
        &copy; {new Date().getFullYear()} Keisha Dumpit
      </p>
    </footer>
  );
}
