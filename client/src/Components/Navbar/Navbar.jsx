import React from "react";
import logo from "../../img-pk/pokeballLogo.png";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to={"/home"}>
        <div className="img-container">
          <img src={logo} alt="logoPokeball" />
        </div>
      </Link>
      <div className="link-container">
        <Link className="link-home" to={"/home"}>
          Home
        </Link>
        <Link className="link-crear" to={"/create"}>
          Crear
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
