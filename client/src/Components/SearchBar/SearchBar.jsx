import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNamePokemons} from "../../redux/actions";
import style from './SearchBar.module.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    //console.log(name);
  };

  const handleSubmit = (e) => {
    //console.log(name);
    e.preventDefault();
    dispatch(getNamePokemons(name));
  };

  return (
    <div className={style.containerSB}>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
        className={style.inputSB}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className={style.buttonSB}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
