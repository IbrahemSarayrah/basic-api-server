'use strict';

const POSTGRES_URI = process.env.DATABASE_URL || 'postgres://localhost/postgres';

const { Sequelize, DataTypes } = require('sequelize');

const clothes = require('./clothes.model');
const food = require('./food.model');

let sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
  db : sequelize,
  Clothes : clothes(sequelize,DataTypes),
  Food: food(sequelize,DataTypes),
};