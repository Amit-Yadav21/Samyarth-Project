import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navbarTogglerRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  const closeMenu = () => {
    if (navbarTogglerRef.current && navbarCollapseRef.current) {
      // Close the navbar menu
      navbarTogglerRef.current.classList.add('collapsed');
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  const handleClick = () => {
    if (navbarTogglerRef.current) {
      navbarTogglerRef.current.blur(); // Removes focus after click
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid navbar-logo">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">Ai Task Manager</Link>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={navbarTogglerRef} // Add the ref here
          onClick={handleClick} // Call handleClick when clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navbarCollapseRef} // Add a ref to the collapsible menu
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2 menu-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item me-2 menu-item">
              <Link className="nav-link" to="/create" onClick={closeMenu}>
                Create Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewtask" onClick={closeMenu}>
                View Tasks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;