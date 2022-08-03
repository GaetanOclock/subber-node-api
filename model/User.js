const { INTEGER } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/dbConnect');

class User extends Model { };

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        displayName: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize: database,
        modelName: 'User',
        tableName: 'user'
    }
);

module.exports = User;