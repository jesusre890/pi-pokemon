const validate = (input) => {
  let errors = {};
  let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (input.name.length > 10) {
    errors.name = "Debe ser menor a 10 carácteres";
  }

  if (!regexImage.test(input.image)) errors.image = "Ingresa una url valida";
  if (!input.image) errors.image = "La imagen no puede estar vacia";

  if (!input.hp) {
    errors.hp = "No puede estar vacio";
  }
  if (input.hp <= 0) {
    errors.hp = "No puede ser menor a 0";
  }

  if (input.attack === "") {
    errors.attack = "No puede estar vacio";
  }

  if (input.defense === "") {
    errors.defense = "No puede estar vacio";
  }

  if (input.hp <= 0) {
    errors.hp = "No puede ser menor a 0";
  }

  if (input.attack <= 0) {
    errors.attack = "No puede ser menor a 0";
  }

  if (input.defense <= 0) {
    errors.defense = "No puede ser menor a 0";
  }

  if (input.speed < 0) {
    errors.speed = "No puede ser menor a 0";
  }

  if (input.height < 0) {
    errors.height = "No puede ser menor a 0";
  }

  if (input.weight < 0) {
    errors.weight = "No puede ser menor a 0";
  }

  if (input.types.length <= 0) errors.types = "Debes elegir al menos un tipo";
  else if (input.types.length > 2) errors.types = "No puede elegir mas de dos tipos";
  if(input.types.length > 0 && input.types.length < 3) errors.types=[];
  
  //if (input.types.length === 1 || input.types.length === 2) errors.types = [];
    //si es correcto limpia los errores

    return errors;
};

export default validate;

//const validate = (input, name) => {
//  if (name === "name") {
//    if (input.name !== "") setErrors({ ...errors, name: "" });
//    else setErrors({ ...errors, name: "Nombre es requerido" });
//  } else if (name === "image") {
//    let regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;

//    if (input.image !== "") setErrors({ ...errors, image: "" });
//    else {
//      setErrors({ ...errors, image: "Imagen es requerida" });
//      return;
//    }
//    if (regexImage.test(input.image)) setErrors({ ...errors, image: "" });
//    else setErrors({ ...errors, image: "Ingresa una url valida" });
//  } else if (name === "hp") {
//    if (input.hp !== "") setErrors({ ...errors, hp: "" });
//    else setErrors({ ...errors, hp: "hp es requerido" });
//  } else if (name === "attack") {
//    if (input.attack !== "") setErrors({ ...errors, attack: "" });
//    else setErrors({ ...errors, attack: "el ataque es requerido" });
//  } else if (name === "defense") {
//    if (input.defense !== "") setErrors({ ...errors, defense: "" });
//    else setErrors({ ...errors, defense: "la defensa es requerida" });
//  }
//};
