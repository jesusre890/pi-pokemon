import React from "react";
import logo from "../../img-pk/gifsPokes/pokeballGif.gif";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <Link to={"/home"}>
        <div className={style.imgContainer}>
          <img src={logo} alt="logoPokeball" />
        </div>
      </Link>
      <div className={style.linkContainer}>
        <Link className={style.linkHome} to={"/home"}>
          Home
        </Link>
        <Link className={style.linkCrear} to={"/create"}>
          Crear
        </Link>
      </div>
        <SearchBar />
    </div>
  );
};

export default Navbar;
