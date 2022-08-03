const { INTEGER } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/dbConnect');

class Original extends Model { };

Original.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        file: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize: database,
        modelName: 'Original',
        tableName: 'original'
    }
);

module.exports = Original;