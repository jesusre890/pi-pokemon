import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, clearDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import loading from "../../img-pk/gifsPokes/Mr.-Rime-Pokemon-PNG.gif";

const Detail = () => {
  let { id } = useParams();

  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(clearDetail())
  }, [dispatch, id]);

  const detailPokemons = useSelector((state) => state.detail);

  return (
    <div>
      {detailPokemons.length > 0 ? (
        <div className={style.bodyDetail}>
          <div className={style.containerDetail}>
            <div className={style.backgroundDetail}>
              <img
                className={style.imageDetail}
                src={detailPokemons[0]?.image}
                alt={detailPokemons[0].name}
              />
            </div>
            <div className={style.contentDetail}>
              <h1 className={style.pokemonNameDetail}>
                {detailPokemons[0].name.toUpperCase()}
              </h1>
              <p className={style.pokemonType}>
                <h4>Tipo: </h4>
                {detailPokemons[0]?.types.join(" ")}
              </p>
              <div className={style.pokemonStats}>
                {/*<p>
                  <span>ID: </span>
                  {detailPokemons[0]?.id}
                </p>*/}
                <p>
                  <span>HP: </span>
                  {detailPokemons[0]?.hp}
                </p>
                <p>
                  <span>Ataque: </span>
                  {detailPokemons[0]?.attack}
                </p>
                <p>
                  <span>Defensa: </span>
                  {detailPokemons[0]?.defense}
                </p>
                <p>
                  <span>Velocidad: </span>
                  {detailPokemons[0]?.speed}
                </p>
                <p>
                  <span>Altura: </span>
                  {detailPokemons[0]?.height}
                </p>
                <p>
                  <span>Peso: </span>
                  {detailPokemons[0]?.weight}
                </p>
              </div>
            </div>
          </div>
        </div>
      ):(
          <div className={style.containerLoading}>
            <img className={style.mime} src={loading} alt="Mr.Mime cargando" />
            <p className={style.loading}>cargando...</p>
          </div>
      )}
    </div>
  );
};

export default Detail;
