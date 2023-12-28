const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      auto_increment: true, // uses auto increment
    },
    product_id: { // product_id column
      type: DataTypes.INTEGER,
      references: { // references the product model's id
        model: 'product',
        key: 'id',
      },
    },
    tag_id: { // tag_id column
      type: DataTypes.INTEGER,
      references: { // references the tag model's id
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize, // imported sequelize connection
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing
    modelName: 'product_tag', // make it so our model name stays lowercase in the database
  }
);

module.exports = ProductTag;
