'use strict';

module.exports = (sequelize, DataTypes) => {

  const sam = sequelize.define('sam', {
    sam: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    tarjeta: {type: DataTypes.STRING,allowNull: false,},
    c00: DataTypes.STRING,
    c01: DataTypes.STRING,
    c02: DataTypes.STRING,
    c03: DataTypes.STRING,
    c04: DataTypes.STRING,
    c05: DataTypes.STRING,
    c06: DataTypes.STRING,
    c07: DataTypes.STRING,
    c08: DataTypes.STRING,
    c09: DataTypes.STRING,
    c10: DataTypes.STRING,
    c11: DataTypes.STRING,
    c12: DataTypes.STRING,
    c13: DataTypes.STRING,
    c14: DataTypes.STRING,
    c15: DataTypes.STRING,
    c16: DataTypes.STRING,
    c17: DataTypes.STRING,
    c18: DataTypes.STRING,
    c19: DataTypes.STRING,
    c20: DataTypes.STRING,
    c21: DataTypes.STRING,
    c22: DataTypes.STRING,
    c23: DataTypes.STRING,
    c24: DataTypes.STRING,
    c25: DataTypes.STRING,
    c26: DataTypes.STRING
  }, {
    tableName: "sams"
  });

  sam.associate = (models) => {
   
  };
  return sam;
};