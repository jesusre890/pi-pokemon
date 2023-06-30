import React from "react";
import style from './Pagination.module.css'

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination
}) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <li className={style.listPage} key={index}>
              <a onClick={() => pagination(number)}>{number}</a>
              <a href=""></a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
