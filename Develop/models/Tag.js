const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      auto_Increment: true, // uses auto increment
    },
    tag_name: { // tag_name column
      type: DataTypes.STRING, // string data type
    },
    },
  {
    sequelize, // imported sequelize connection
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing
    modelName: 'tag', // make it so our model name stays lowercase in the database
  }
);

module.exports = Tag;
