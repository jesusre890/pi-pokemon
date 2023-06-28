import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../redux/actions";
import Cards from "../../Components/Cards/Cards";
//import Pagination from "../../Components/Pagination.jsx/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons=useSelector((state) => state.allPokemons);
  

  
  useEffect(() => {
    dispatch(getAllPokemon());
    //console.log(items);
  }, []);

  //const handleClick
  
  return (
    <div className="home-container">
      <button>Recargar</button>
      <Cards allPokemons={allPokemons}/>
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

{/*<label>Ordenamiento por nombre</label>*/}
{/*{console.log(pokemonFiltered)}*/}
{/*<button value='filter' onClick={filterOrd}>filter x</button>*/}
{/*<div>
  <button onClick={prevPage}>prev</button>
  <button onClick={nextPage}>next</button>
</div>*/}
{/*<select onChange={handleSort}>
  <option defaultChecked value="0">
  -
  </option>
  <option value="asc">A - Z</option>
  <option value="des">Z - A</option>
</select>*/}

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