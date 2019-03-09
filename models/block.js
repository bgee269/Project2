module.exports = function(sequelize, DataTypes) {
  var Blocks = sequelize.define("Block", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    zone: DataTypes.INTEGER,
    lat1: DataTypes.DECIMAL(10,6),
    lng1: DataTypes.DECIMAL(10,6),
    lat2: DataTypes.DECIMAL(10,6),
    lng2: DataTypes.DECIMAL(10,6),
    spotsAvailable: DataTypes.BOOLEAN
  });
  return Blocks;
}; 
