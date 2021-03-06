'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role =sequelize.define('Role',{
    role:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName:"roles"
  });

  Role.associate = (models) => {

    Role.belongsToMany(models.user, { as: "users", through: "user_role",foreignKey: "role_id" })

  }

  return Role;
}