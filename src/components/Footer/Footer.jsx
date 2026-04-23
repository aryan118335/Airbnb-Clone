// src/components/Footer/Footer.jsx
// VARAD's commit

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__section">
          <h4>Support</h4>
          <a href="#">Help Centre</a>
          <a href="#">AirCover</a>
          <a href="#">Anti-discrimination</a>
          <a href="#">Disability support</a>
          <a href="#">Cancellation options</a>
          <a href="#">Report neighbourhood concern</a>
        </div>
        <div className="footer__section">
          <h4>Hosting</h4>
          <a href="#">Airbnb your home</a>
          <a href="#">AirCover for Hosts</a>
          <a href="#">Hosting resources</a>
          <a href="#">Community forum</a>
          <a href="#">Hosting responsibly</a>
        </div>
        <div className="footer__section">
          <h4>Airbnb</h4>
          <a href="#">Newsroom</a>
          <a href="#">New features</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
          <a href="#">Gift cards</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Airbnb Clone · WAP Contest 4 · Aryan · Jayraj · Varad</p>
        <div className="footer__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
