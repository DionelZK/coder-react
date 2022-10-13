import React from 'react';
import './Navbar.css';
import Cartwidget from './Cartwidget';
import Header from './Header';
import { Link } from 'react-router-dom';
import logo from './logo192.png';
const Navbar = ({ user }) => {
  return (
    <div className="header">
      <div className="nav-welcome">
        <img className="icon" src={logo} />
        <p>Bienvenido {user}</p>
      </div>
      <Header />
      <Link to="/cart">
        <Cartwidget />
      </Link>
    </div>
  );
};

export default Navbar;
