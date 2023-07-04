import React, { useEffect, useState } from "react";
// install react-redux
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterCreated,
  getTypes,
  orderByName,
  orderByAttack,
  orderByType,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
// componentes
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination.jsx/Pagination";
import Navbar from "../../Components/Navbar/Navbar";
import loading from "../../img-pk/gifsPokes/Mr.-Rime-Pokemon-PNG.gif";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const [orden, setOrden] = useState("");
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
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1); // Lo setea en la pagina 1
    setOrden(`Ordenado ${e.target.value}`); //modifica el estado local para hacer el ordenamiento
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  const handleSortAttack = (e) => {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterTypes = (e) => {
    e.preventDefault();
    if (e.target.value !== "Tipos") {
      dispatch(orderByType(e.target.value));
    }
  };

  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.containerButton}>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className={style.recargar}
        >
          <svg
            viewBox="0 0 16 16"
            class="bi bi-arrow-repeat"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
            <path
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              fill-rule="evenodd"
            ></path>
          </svg>
          Recargar
        </button>
        <select onChange={(e) => handleSort(e)} className={style.azButton}>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
        <select
          onChange={(e) => handleFilterTypes(e)}
          className={style.typesButton}
        >
          <option>Tipos</option>
          <option value="All">Todos</option>
          {allTypes?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => handleSortAttack(e)}
          className={style.attackButton}
        >
          <option value="attack">Ataques</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select
          onChange={(e) => handleFilterCreated(e)}
          className={style.origenButton}
        >
          <option value="All">Origen</option>
          <option value="created">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
        page={currentPage}
      />
      <div className={style.linkCard}>
        {currentPokemons.length ? (
          currentPokemons?.map((e, index) => {
            return (
              <Link key={index} className={style.card} to={`/detail/${e.id}`}>
                <Card
                  name={e.name}
                  hp={e.hp}
                  image={e.image}
                  id={e.id}
                  types={e.types}
                  key={index}
                />
              </Link>
            );
          })
        ) : (
          <div className={style.containerLoading}>
            <img className={style.mime} src={loading} alt="Mr.Mime cargando" />
            <p className={style.loading}>cargando...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
