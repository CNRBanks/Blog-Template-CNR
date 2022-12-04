const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Comments extends Model { }
Comments.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize, modelName: 'Comments'})

module.exports = Comments