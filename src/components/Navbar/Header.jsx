import React from 'react';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-item" to="/">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item" to="/category/remeras">
            Remeras
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item" to="/category/pantalones">
            Pantalones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item" to="/category/gorras">
            Gorras
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
