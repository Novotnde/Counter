import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">     
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">Hello World</Link>
            </li>
            <li className="nav-item">
              <Link to="/counters" className="nav-link">Counters</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
