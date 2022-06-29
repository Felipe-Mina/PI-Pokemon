const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('type', {
      
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
});
};
