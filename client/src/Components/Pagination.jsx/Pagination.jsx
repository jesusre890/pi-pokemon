import React from "react";
import style from './Pagination.module.css'

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
  page,
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul className='ulPagination'>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} style={{ listStyle: "none" }}>
              <button
                className='buttons'
                style={
                  page === number
                    ? { color: "white", background: "darkgrey" }
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
