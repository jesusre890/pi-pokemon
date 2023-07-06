import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Create.module.css";
import validate from "../../Components/Validate/Validate";
import snorlax from "../../img-pk/gifsPokes/snorlax.gif";
import { Link } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [errors, setErrors] = useState({});

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      //console.log("soy error", error);
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemons(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      types: [],
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input, //copia el estado como ya existe
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    //console.log(input);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDelete = (e) => {
    setInput({
      ...input, // estado anterior
      types: input.types.filter((t) => t !== e),
    });
  };

  return (
    <div className={style.containerF}>
      <div className={style.guiaP}>
        <Link to={"/home"} className={style.spanBo}>
          <button className={style.buttonVolver}>
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span className={style.spanV}>volver</span>
          </button>
        </Link>
        <div className={style.containerGuia}>
          <div className={style.necesitasP}>
            <h3>Necesitás imágenes para crear tu pokemon?</h3>
            <h4>
              Podés buscar aquí:{" "}
              <a
                className={style.linkParaCrear}
                href="https://custom-doodle.com/collection/pokemon/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </h4>
          </div>
          <div className={style.guiaP}>
            <h4 className={style.guia1}>Guia:</h4>
            <p>1- Elige el pokemon deseado</p>
            <p>2- Haz click derecho sobre el mismo </p>
            <p>3- Selecciona "Copiar dirección de la imagen" </p>
            <p>4- Pega la dirección en el formulario </p>
          </div>
        </div>
      </div>
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <h3 className={style.formTitle}>Crea un pokemon</h3>
          <div>
            <div className={style.inputContainer}>
              <input
                placeholder="Nombre"
                name="name"
                type="text"
                value={input.name}
                onChange={handleChange}
              />
              <div>
                {errors.name && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Imagen  .jpg .jpeg .png .gif"
                name="image"
                type="text"
                value={input.image}
                onChange={handleChange}
              />
              <div>
                {errors.image && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.image}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="HP"
                name="hp"
                type="number"
                value={input.hp}
                onChange={handleChange}
              />
              <div>
                {errors.hp && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.hp}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Ataque"
                name="attack"
                type="number"
                value={input.attack}
                onChange={handleChange}
              />
              <div>
                {errors.attack && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.attack}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Defensa"
                name="defense"
                type="number"
                value={input.defense}
                onChange={handleChange}
              />
              <div>
                {errors.defense && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.defense}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Velocidad"
                name="speed"
                type="number"
                value={input.speed}
                onChange={handleChange}
              />
              <div>
                {errors.speed && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.speed}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Altura"
                name="height"
                type="number"
                value={input.height}
                onChange={handleChange}
              />
              <div>
                {errors.height && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.height}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Peso"
                name="weight"
                type="number"
                value={input.weight}
                onChange={handleChange}
              />
              <div>
                {errors.weight && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.weight}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <label className={style.typeS}>Tipo:</label>
              <select
                onChange={(e) => handleSelect(e)}
                className={style.selectType}
              >
                {types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div>
                {errors.types && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.types}
                  </span>
                )}
              </div>
            </div>
            <div className={style.crearP}>
              <button
                className={style.buttonCrear}
                type="submit"
                name="submit"
                disabled={disable()}
              >
                Crear
              </button>
            </div>
          </div>
        </form>
        <div>
          {input.types.map((e, index) => (
            <div className={style.divDelete} key={index}>
              <p className={style.typeElegido} style={{ color: "white" }}>
                {e}
              </p>
              <button className={style.botonX} onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.snorlax}>
        <img src={snorlax} alt="Snorlax esperando" />
      </div>
    </div>
  );
};

export default Create;
