const { INTEGER } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/dbConnect');

class Video extends Model { };

Video.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize: database,
        modelName: 'Video',
        tableName: 'video'
    }
);

module.exports = Video;