const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('psicologo', {
    yearsExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    honorario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
    
    {
      timestamps: false
    });
};