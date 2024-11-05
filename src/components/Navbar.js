import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Pinja Osaamisenhallinta</h2>
      <ul className="navbar-links">
        <li><Link to="/konsultit">Konsultit</Link></li>
        <li><Link to="/haku">Haku</Link></li>
        <li><Link to="/raportit">Raportit</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
