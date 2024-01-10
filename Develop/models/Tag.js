const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

// set up fields and rules for Tag model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false, // equivalent of SQL's NOT NULL option
      primaryKey: true, // instruct that this is the Primary Key
      autoIncrement: true, // turn on auto increment
    },
    tag_name: {
      type: DataTypes.STRING, // use the special Sequelize DataTypes object provide what type of data it is
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