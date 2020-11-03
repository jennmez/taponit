const { Model } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/taponit', {
  // keeps terminal clean from logging
  logging: false,
  // stops deprecation warnings
  operatorsAliases: 'false',
});

// Product Model
const Product = db.define('product', {
  title: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cdn.dribbble.com/users/266686/screenshots/2740301/beer-icon-02.png',
  },
  price: {
    type: Sequelize.INTEGER,
    validation: {
      min: 0,
    },
  },
  likes: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { Product, db };
