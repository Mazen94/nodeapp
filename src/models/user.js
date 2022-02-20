'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: 'userId',
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        unique: true,
       } 
    },
    password: {
      type: DataTypes.STRING(64),
      validate: {
        is: /^[0-9a-f]{64}$/i
      }
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
    timestamps: true,

  });
  return User;
};