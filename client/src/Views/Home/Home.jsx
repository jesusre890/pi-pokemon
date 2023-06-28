import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon, filterByOrigin } from "../../redux/actions";
//import Cards from "../../Components/Cards/Cards";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import Pagination from "../../Components/Pagination.jsx/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage; // 6
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // 0
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //pagina actual

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemon());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemon());
  };

  const handleFilterOrigin = (e) => {
    if (e.target.value !== "Origen") {
      dispatch(filterByOrigin(e.target.value));
    }
  };

  return (
    <div className={style.homeContainer}>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar
      </button>
      <div>
        <select>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
        <select>
          <option value="min">Ataques</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select onChange={(e) => handleFilterOrigin(e)}>
          <option value="All">Origen</option>
          <option value="db">Creados</option>
          <option value="api">Api</option>
        </select>
        <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
      />
      </div>
      <div className={style.linkCard}>
        {currentPokemons?.map((e) => {
          return (
            <Link className={style.card} to={"/home/" + e.id}>
              <Card
                name={e.name}
                image={e.image}
                id={e.id}
                types={e.types}
                key={e.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

//const handleSort = (event) => {
//  event.preventDefault();
//  dispatch(filter(event.target.value));
//  setCurrentPage(1);
//  setOrden(`Ordenado ${event.target.value}`);
//};

//  /*<label>Ordenamiento por nombre</label>*/

//  /*{console.log(pokemonFiltered)}*/

//  /*<button value='filter' onClick={filterOrd}>filter x</button>*/

//  /*<div>
//  <button onClick={prevPage}>prev</button>
//  <button onClick={nextPage}>next</button>
//</div>*/

//  /*<select onChange={handleSort}>
//  <option defaultChecked value="0">
//  -
//  </option>
//  <option value="asc">A - Z</option>
//  <option value="des">Z - A</option>
//</select>*/

//const pokemonFiltered = useSelector((state) => state.pokemonFiltered);

//const [orden, setOrden] = useState("");
//const [currentPage, setCurrentPage] = useState(1);
//const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
//const indexOfLastPokemon = currentPage * pokemonsPerPage;
//const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//const currentPokemons = allPokemons.slice(
//  indexOfFirstPokemon,
//  indexOfLastPokemon
//);

//const paginado = (pageNumber) => {
//  setCurrentPage(pageNumber);
//};
