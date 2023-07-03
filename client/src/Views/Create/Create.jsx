import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Create.module.css";
import validate from "../../Components/Validate/Validate";

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
    height: 0,
    weight: 0,
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [errors, setErrors] = useState({

  });

  const disable = () => {
    let disabled = true;
    //console.log(errors);
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
    //console.log(input);
    dispatch(createPokemons(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: '',
      weight: '',
      types: [],
    });
  };

  const handleChange=(e) => {
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

  const handleSelect=(e) => {
    e.preventDefault()
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
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <h3 className={style.formTitle}>Crea un pokemon</h3>
        <div>
          <label>Nombre:</label>
          <input
            name="name"
            type="text"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Imagen:</label>
          <input
            name="image"
            type="text"
            value={input.image}
            onChange={handleChange}
          />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div>
          <label>HP:</label>
          <input
            name="hp"
            type="text"
            value={input.hp}
            onChange={handleChange}
          />
          {errors.hp && <span>{errors.hp}</span>}
        </div>
        <div>
          <label>Ataque:</label>
          <input
            name="attack"
            type="text"
            value={input.attack}
            onChange={handleChange}
          />
          {errors.attack && <span>{errors.attack}</span>}
        </div>
        <div>
          <label>Defensa:</label>
          <input
            name="defense"
            type="text"
            value={input.defense}
            onChange={handleChange}
          />
          {errors.defense && <span>{errors.defense}</span>}
        </div>
        <div>
          <label>Velocidad:</label>
          <input
            name="speed"
            type="text"
            value={input.speed}
            onChange={handleChange}
          />
          {errors.speed && <span>{errors.speed}</span>}
        </div>
        <div>
          <label>Altura:</label>
          <input
            name="height"
            type="text"
            value={input.height}
            onChange={handleChange}
          />
          {errors.height && <span>{errors.height}</span>}
        </div>
        <div>
          <label>Peso:</label>
          <input
            name="weight"
            type="text"
            value={input.weight}
            onChange={handleChange}
          />
          {errors.weight && <span>{errors.weight}</span>}
        </div>
        <div>
          <label>Tipo:</label>
          <select onChange={(e) => handleSelect(e)}>
            {types.map((t, index) => (
              <option key={index} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          {errors.types && <span>{errors.types}</span>}
        </div>
        <button type="submit" name="submit" disabled={disable()}>
          Crear
        </button>
      </form>
      {input.types.map((e, index) => (
        <div className={style.divDelete}>
          <p>{e}</p>
          <button
            key={index}
            className={style.botonX}
            onClick={() => handleDelete(e)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Create;

//disabled={disable()}

//{/*<ul>
//  <li>{input.types.map((e) => e + " ,")}</li>
//</ul>*/}
