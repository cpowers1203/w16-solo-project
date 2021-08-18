'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
    Spot.hasMany(models.Booking, { foreignKey: 'spotId' })
    Spot.hasMany(models.Images, {foreignKey: 'spotId'})
  };
  return Spot;
};