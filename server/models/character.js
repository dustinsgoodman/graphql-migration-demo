'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Location, {
        as: 'location',
        foreignKey: 'locationId',
      });
      Character.belongsTo(models.Location, {
        as: 'origin',
        foreignKey: 'originId',
      });
      Character.belongsToMany(models.Episode, {
        through: models.Appearance,
      });
    }
  };
  Character.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
