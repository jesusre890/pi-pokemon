import React, { useEffect, useState } from "react";
// install react-redux
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterCreated, getTypes, orderByName, orderByAttack, orderByType } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
// componentes
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination.jsx/Pagination";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons=useSelector((state) => state.pokemons);
  const allTypes= useSelector((state) => state.types)
  //console.log(allTypes);
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
    dispatch(getTypes())
  },[dispatch]);

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

  const handleFilterCreated=(e) => {
    e.preventDefault()
    dispatch(filterCreated(e.target.value));
  };

  const handleSortAttack=(e) => {
    e.preventDefault()
    dispatch(orderByAttack(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`);
  }

  const handleFilterTypes=(e) => {
    e.preventDefault()
    if(e.target.value!=='Tipos') {
      dispatch(orderByType(e.target.value))
    }
  }

  return (
    <div className={style.homeContainer}>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar
      </button>
      <SearchBar />
      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
        <select onChange={(e) => handleFilterTypes(e)}>
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
        <select onChange={(e) => handleSortAttack(e)}>
          <option value="attack">Ataques</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="All">Origen</option>
          <option value="created">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
        //page={currentPage}
      />
      <div className={style.linkCard}>
        {currentPokemons?.map((e, index) => {
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
