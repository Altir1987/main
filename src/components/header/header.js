import React from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom";
import './header.css';

const Header = ({ onServiceChange }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div className="header d-flex">
      <h3>
        <Link to="/" onClick={() => handleLinkClick('/')}>StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people" onClick={() => handleLinkClick('/people')}>People</Link>
        </li>
        <li>
          <Link to="/planets" onClick={() => handleLinkClick('/planets')}>Planets</Link>
        </li>
        <li>
          <Link to="/starships" onClick={() => handleLinkClick('/starships')}>Starships</Link>
        </li>
      </ul>
      {/* Outlet для вложенных маршрутов */}
      <Outlet />
    </div>
  );
};

export default Header;
