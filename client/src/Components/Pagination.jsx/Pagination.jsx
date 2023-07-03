import React from "react";
import style from './Pagination.module.css'

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
  page
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <li
              //className={style.listPage}
              key={index}
              style={{ listStyle: "none" }}
            >
              <button
                className={style.buttonP}
                style={
                  page === number
                    ? { color: 'white' , background: "darkgrey" }
                    : {}
                }
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}

//<a onClick={() => pagination(number)}>{number}</a>
