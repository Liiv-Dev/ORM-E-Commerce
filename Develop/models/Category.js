const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// set up fields and rules for Category model
Category.init(
  {
    id: { // id column
    type: DataTypes.INTEGER, // integer data type
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true, // uses auto increment
    },
    category_name: { // category_name column
      type: DataTypes.STRING, // string data type
      allowNull:false,
    },
  },
  {
    sequelize, // imported sequelize connection
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing
    modelName: 'category', // make it so our model name stays lowercase in the database
  }
);

module.exports = Category;
