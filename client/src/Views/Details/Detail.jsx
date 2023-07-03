import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, clearDetail, getTypes } from "../../redux/actions";
import style from "./Detail.module.css";
import loading from "../../img-pk/gifsPokes/Mr.-Rime-Pokemon-PNG.gif";
import fire from '../../img-pk/gifsPokes/fire.gif'
import normal from "../../img-pk/normal.png"
import lucha from "../../img-pk/gifsPokes/machop.gif"
import volador from "../../img-pk/gifsPokes/volador.gif"
import poison from "../../img-pk/poison.png"
import tierra from "../../img-pk/tierra.png";
import roca from "../../img-pk/gifsPokes/roca.gif";
import bug from "../../img-pk/gifsPokes/bug.gif";
import ghost from "../../img-pk/gifsPokes/ghost.gif";
import steel from "../../img-pk/gifsPokes/steel.gif";
import agua from "../../img-pk/gifsPokes/agua.gif";
import grass from "../../img-pk/gifsPokes/png-ludicolo-dance.gif";
import electricidad from "../../img-pk/gifsPokes/electrico.gif";
import ps from "../../img-pk/gifsPokes/mew.gif";
import hielo from "../../img-pk/gifsPokes/hielo.gif";
import dragon from "../../img-pk/gifsPokes/dragon.gif";
import fairy from "../../img-pk/gifsPokes/fairy.gif";
import dark from "../../img-pk/dark.png";
import desconocido from "../../img-pk/desconocido.png";

const Detail = () => {
  let {id}=useParams();
  
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getTypes())
    return () => dispatch(clearDetail());
  }, [dispatch, id]);
  
  const types=useSelector(state => state.types)
  //console.log(types[0]);
  const detailPokemons=useSelector((state) => state.detail);
  //console.log(detailPokemons[0]?.types[0]);

  const typesColors = {
    fire: "#F57D31",
    normal: "#AAA67F",
    fighting: "#D3425F",
    flying: "#A891EC",
    ground: "#DEC16B",
    poison: "#A43E9E",
    rock: "#B69E31",
    bug: "#A7B723",
    ghost: "#70559B",
    steel: "#5695A3",
    water: "#6493EB",
    grass: "#74CB48",
    electric: "#F9CF30",
    psychic: "#FB5584",
    ice: "#9AD6DF",
    dragon: "#7037FF",
    dark: "#75574C",
    fairy: "#E69EAC",
    unknown: "#BF5481",
    shadow: "#36045E",
  };

  const typesGift = {
    fire: fire,
    normal: normal,
    fighting: lucha,
    flying: volador,
    ground: tierra,
    poison: poison,
    rock: roca,
    bug: bug,
    ghost: ghost,
    steel: steel,
    water: agua,
    grass: grass,
    electric: electricidad,
    psychic: ps,
    ice: hielo,
    dragon: dragon,
    dark: dark,
    fairy: fairy,
    unknown: desconocido,
    shadow: "#36045E",
  };

  return (
    <div>
      {detailPokemons.length > 0 ? (
        <div className={style.bodyDetail}>
          <div
            className={style.containerDetail}
            style={{
              backgroundColor: typesColors[detailPokemons[0]?.types[0]],
            }}
          >
            <div
              className={style.backgroundDetail}
              //style={{
              //  backgroundColor: typesColors[detailPokemons[0]?.types[0]],
              //}}
            >
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
              <h3
                className={style.pokemonType}
                style={{
                  backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                }}
              >
                <p>Tipo: </p>
                {detailPokemons[0]?.types.join(" ")}
              </h3>
              <div className={style.pokemonStats}>
                {/*<p>
                    <span>ID: </span>
                    {detailPokemons[0]?.id}
                  </p>*/}
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                  }}
                >
                  <span>HP: </span>
                  {detailPokemons[0]?.hp}
                </p>
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                  }}
                >
                  <span>Ataque: </span>
                  {detailPokemons[0]?.attack}
                </p>
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                  }}
                >
                  <span>Defensa: </span>
                  {detailPokemons[0]?.defense}
                </p>
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                  }}
                >
                  <span>Velocidad: </span>
                  {detailPokemons[0]?.speed}
                </p>
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]],
                  }}
                >
                  <span>Altura: </span>
                  {detailPokemons[0]?.height}
                </p>
                <p
                  style={{
                    backgroundColor: typesColors[detailPokemons[0]?.types[0]]
                  }}
                >
                  <span style={{color: "black"}}>Peso: </span>
                  {detailPokemons[0]?.weight}
                </p>
                <div className={style.imageGif}>
                  <img src={typesGift[detailPokemons[0]?.types[0]]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.containerLoading}>
          <img className={style.mime} src={loading} alt="Mr.Mime cargando" />
          <p className={style.loading}>cargando...</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
