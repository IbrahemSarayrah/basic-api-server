'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://gbswzsvd:1dO_7v5BnYt3iqrJKBUHs6gV1fbbIgzz@hattie.db.elephantsql.com/gbswzsvd';

const { Sequelize, DataTypes } = require('sequelize');

const clothes = require('./clothes.model');
const food = require('./food.model');


let sequelize = new Sequelize(POSTGRES_URI, {});


module.exports = {
  db : sequelize,
  Clothes : clothes(sequelize,DataTypes),
  Food: food(sequelize,DataTypes),
};