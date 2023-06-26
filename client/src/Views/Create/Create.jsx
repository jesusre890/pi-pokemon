import React,{useState} from "react";
import './Create.css'

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "Nombre es requerido",
    image: "Imagen es requerida",
    hp: "hp es requerido",
    attack: "el ataque es requerido",
    defense: "la defensa es requerida",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const validate = (input, name) => {
    if(name==="name") {
      
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({...errors,name: "Nombre es requerido"});

    } else if(name==="image") {
      
      let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
      if (input.image !== "") setErrors({ ...errors, image: "" });
      else {
        setErrors({...errors,image: "Imagen es requerida"})
        return
      };

      if(!regexImage.test(input.image)) setErrors({ ...errors, image: "" });
      else setErrors({...errors,image: "Ingresa una url valida"})
      //if(!input.image) errors.image="La imagen no puede estar vacia";
      
    } else if(name==="hp") {
      
      if (input.hp !== "") setErrors({ ...errors, hp: "" });
      else setErrors({...errors,name: "hp es requerido"});
      
    } else if(name==="attack") {
      
      if (input.attack !== "") setErrors({ ...errors, attack: "" });
      else setErrors({...errors,name: "el ataque es requerido"});
      
    } else if(name==="defense") {
      
      if (input.defense !== "") setErrors({ ...errors, defense: "" });
      else setErrors({ ...errors, name: "la defensa es requerida" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(input);
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

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
          <h3 className="form-title">Crea un pokemon</h3>
          <div>
            <label htmlFor="">Nombre:</label>
            <input name="name" type="text" onChange={handleChange} />
            {errors.name}
          </div>
          <div>
            <label htmlFor="">Imagen:</label>
            <input name="image" type="text" onChange={handleChange} />
            {errors.image}
          </div>
          <div>
            <label htmlFor="">HP:</label>
            <input name="hp" type="text" onChange={handleChange} />
            {errors.hp}
          </div>
          <div>
            <label htmlFor="">Ataque:</label>
            <input name="attack" type="text" onChange={handleChange} />
            {errors.arrack}
          </div>
          <div>
            <label htmlFor="">Defensa:</label>
            <input name="defense" type="text" onChange={handleChange} />
            {errors.defense}
          </div>
          <div>
            <label htmlFor="">Velocidad:</label>
            <input name="speed" type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Altura:</label>
            <input name="height" type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Peso:</label>
            <input name="weight" type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Tipo:</label>
            <input name="type" type="text" onChange={handleChange} />
          </div>
          <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Create;
