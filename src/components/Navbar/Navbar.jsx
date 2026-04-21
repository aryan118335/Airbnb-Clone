// src/components/Navbar/Navbar.jsx
// ARYAN's commit

import { useState } from "react";
import "./Navbar.css";

function Navbar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <svg viewBox="0 0 32 32" className="navbar__logo-icon" aria-hidden="true">
          <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.44-6.414 3.615l-.28.015-.26.005c-3.48 0-6.357-2.416-6.357-6.478l.001-.228.01-.415c.05-.924.293-1.805.96-3.396l.145-.353c.985-2.296 5.145-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.754-6.083 12.46-7.07 14.749l-.14.33c-.558 1.33-.757 2.056-.798 2.826l-.008.36-.001.218c0 2.882 1.985 4.478 4.357 4.478 1.829 0 3.891-1.088 5.87-3.212l.223-.237.174-.189.176-.197.171.191.174.195.219.237c1.978 2.12 4.04 3.212 5.87 3.212 2.372 0 4.357-1.596 4.357-4.478l-.001-.218-.008-.36c-.041-.77-.24-1.496-.798-2.826l-.14-.33c-.987-2.29-5.144-10.995-7.07-14.749l-.523-1.008C18.053 3.539 17.239 3 16 3zm0 12.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
        </svg>
        <span className="navbar__logo-text">airbnb</span>
      </div>

      <div className="navbar__search-mini">
        <span>Anywhere</span>
        <span className="navbar__divider">|</span>
        <span>Any week</span>
        <span className="navbar__divider">|</span>
        <span className="navbar__search-gray">Add guests</span>
        <button className="navbar__search-btn" aria-label="Search">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13c3.14 0 6.01-1.12 8.26-2.95L28.59 30.6a2 2 0 002.83-2.83l-7.33-7.33A12.93 12.93 0 0026 13C26 5.82 20.18 0 13 0zm0 4a9 9 0 110 18A9 9 0 0113 4z" />
          </svg>
        </button>
      </div>

      <div className="navbar__actions">
        <a href="#" className="navbar__link">Airbnb your home</a>
        <button className="navbar__menu-btn" onClick={handleMenuToggle} aria-label="User menu">
          <svg viewBox="0 0 32 32" className="navbar__hamburger" aria-hidden="true">
            <path d="M2 7h28v2H2V7zm0 8h28v2H2v-2zm0 8h28v2H2v-2z" />
          </svg>
          <div className="navbar__avatar">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0119.86 0A12.38 12.38 0 0116 28.7zM10 13c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
            </svg>
          </div>
        </button>
        {menuOpen && (
          <div className="navbar__dropdown">
            <a href="#">Sign up</a>
            <a href="#">Log in</a>
            <hr />
            <a href="#">Airbnb your home</a>
            <a href="#">Help</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
