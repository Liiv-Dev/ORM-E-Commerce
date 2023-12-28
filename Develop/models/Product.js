// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer data type
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      auto_Increment: true, // uses auto increment
    },
    product_name: { // product_name column
      type: DataTypes.STRING, // string data type
      allowNull: false,
    },
    price: { // price column
      type: DataTypes.DECIMAL, // decimal data type
      allowNull: false,
      validate: { // validates that the value is a decimal
        isDecimal:true,
      },
    },
    stock: { // stock column
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 10, // set a default value of 10
      validate: { // validates that the value is numeric
        isNumeric:true,
      },
    },
    category_id: { // category_id column
      type: DataTypes.INTEGER,
      references: { // references the category model's id
        model: 'category',
        key: 'id',
      },
    },
    sequelize, // imported sequelize connection
    timestamps: false, // don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of database table
    underscored: true, // use underscores instead of camel-casing
    modelName: 'product', // make it so our model name stays lowercase in the database
  }
);

module.exports = Product;
