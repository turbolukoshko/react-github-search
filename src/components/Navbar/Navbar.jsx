import React from 'react';

const Navbar = () => {
  return(
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
