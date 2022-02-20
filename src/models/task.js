'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Task.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        allowNull:false
      }
    },
    isCompleted: {
      type: DataTypes.NUMBER,
      validate: {
        isNumeric: true,
        isIn: [[0, 1]]
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Task',
  });
  return Task;
};