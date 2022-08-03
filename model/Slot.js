const { INTEGER } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/dbConnect');

class Slot extends Model { };

Slot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        start: {
            type: INTEGER,
            allowNull: false
        },
        duration: {
            type: INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: database,
        modelName: 'Slot',
        tableName: 'slot'
    }
);

module.exports = Slot;