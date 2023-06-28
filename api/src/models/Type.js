const { DataTypes } = require("sequelize");

// se exporta la funcion que contiene el modelo
//definimos sequelize
module.exports=(sequelize) => {
    // defino el modelo
    sequelize.define(
      "Type",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull:false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { freezeTableName: true, timestamps: false } // para que no se generen las columnas de los datos
    );
};
