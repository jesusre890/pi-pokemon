import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
//import "./Create.css";
import style from "./Create.module.css";
import { useEffect } from "react";

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
    types: []
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const [errors, setErrors] = useState({
    name: "Nombre es requerido",
    image: "Imagen es requerida",
    hp: "hp es requerido",
    attack: "el ataque es requerido",
    defense: "la defensa es requerida",
    speed: "",
    height: "",
    weight: "",
    types: []
  });

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const validate = (input, name) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Nombre es requerido" });
    } else if (name === "image") {
      let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

      if (input.image !== "") setErrors({ ...errors, image: "" });
      else {
        setErrors({ ...errors, image: "Imagen es requerida" });
        return;
      }
      if (regexImage.test(input.image)) setErrors({ ...errors, image: "" });
      else setErrors({ ...errors, image: "Ingresa una url valida" });
    } else if (name === "hp") {
      if (input.hp !== "") setErrors({ ...errors, hp: "" });
      else setErrors({ ...errors, hp: "hp es requerido" });
    } else if (name === "attack") {
      if (input.attack !== "") setErrors({ ...errors, attack: "" });
      else setErrors({ ...errors, attack: "el ataque es requerido" });
    } else if (name === "defense") {
      if (input.defense !== "") setErrors({ ...errors, defense: "" });
      else setErrors({ ...errors, defense: "la defensa es requerida" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch(createPokemons(input));
  };

  const handleChange = (event) => {
    setInput({
      ...input, //copia el estado como ya existe
      [event.target.name]: event.target.value,
    });
    validate(
      {
        //pasandole el mismo objeto que a handleChange evito que se haga el diley cuando uno completa el input
        ...input, //copia el estado como ya existe
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const handleSelect=(e) => {
    setInput({
      ...input,
      types: [...input.types, e.target.value]
    })
  }

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h3 className={style.formTitle}>Crea un pokemon</h3>
        <div>
          <label>Nombre:</label>
          <input name="name" type="text" onChange={handleChange} />
          {errors.name}
        </div>
        <div>
          <label>Imagen:</label>
          <input name="image" type="text" onChange={handleChange} />
          {errors.image}
        </div>
        <div>
          <label>HP:</label>
          <input name="hp" type="text" onChange={handleChange} />
          {errors.hp}
        </div>
        <div>
          <label>Ataque:</label>
          <input name="attack" type="text" onChange={handleChange} />
          {errors.attack}
        </div>
        <div>
          <label>Defensa:</label>
          <input name="defense" type="text" onChange={handleChange} />
          {errors.defense}
        </div>
        <div>
          <label>Velocidad:</label>
          <input name="speed" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Altura:</label>
          <input name="height" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Peso:</label>
          <input name="weight" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Tipo:</label>
          <select onChange={(e) => handleSelect(e)}>
            {types.map((t) => (
              <option value={t.name}>{t.name}</option>
            ))}
          </select>
          <ul><li>{input.types.map(e => e + ' ,')}</li></ul>
        </div>
        <input disabled={disable()} type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Create;
