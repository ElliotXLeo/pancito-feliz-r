import '../styles/css/Footer.css';

const Footer = ({ credits }) => {
  const { author, currentYear } = credits;

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="footer-nav-container">
          <ul className="footer-nav__link-list">
            <li className="footer-nav__link-item">
              <a href="https://www.linkedin.com/in/elliotgaramendi/" className="footer-nav__link">
                <img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.instagram.com/elliotgaramendi/" className="footer-nav__link">
                <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.facebook.com/elliotgaramendi" className="footer-nav__link">
                <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://github.com/ElliotXLeo" className="footer-nav__link">
                <img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.youtube.com/channel/UCE9whBrtYnLWrpzwk6z_JUA" className="footer-nav__link">
                <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://nextjs-react-portafolio-fc.vercel.app" className="footer-nav__link">
                <img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Página Personal"
                  className="footer-nav__link-image" />
              </a>
            </li>
          </ul>
          <h2 className="footer-nav__credits">
            🦄Copyright &copy; {currentYear} <a href="https://www.linkedin.com/in/elliotgaramendi/" className="footer-nav__credits-author" target="_blank" rel="noreferrer">{author}.</a> Todos los derechos reservados.🦄
          </h2>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;