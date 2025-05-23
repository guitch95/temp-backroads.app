import React from 'react';
import logo from '../images/logo.svg';
import {socialLinks} from '../data';
import PageLinks from './PageLinks';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks itemClass="nav-link" parentClass="nav-links" />
        <ul className="nav-icons">
          {socialLinks.map(({href, id, icon}) => {
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
