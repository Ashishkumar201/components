import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-brand">MyApp</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>

        {/* Dropdown 1 - Optional */}
        <li className="dropdown">
        <button
          className="dropdown-button"
          aria-expanded={openDropdown1}
          onClick={() => setOpenDropdown1(!openDropdown1)}
        >

            Services <span className="arrow">▼</span>
          </button>
          {openDropdown1 && (
            <ul className="dropdown-menu">
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          )}
        </li>

        {/* Dropdown 2 - Optional */}
        <li className="dropdown">
          <button
            className="dropdown-button"
            onClick={() => setOpenDropdown2(!openDropdown2)}
          >
            More <span className="arrow">▼</span>
          </button>
          {openDropdown2 && (
            <ul className="dropdown-menu">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          )}
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
