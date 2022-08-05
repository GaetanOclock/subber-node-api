const { INTEGER } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/dbConnect');

class Sub extends Model { };

Sub.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize: database,
        modelName: 'Sub',
        tableName: 'sub'
    }
);

module.exports = Sub;