const { DataTypes, Model } = require('sequelize')
const sequelize = require("../db")

class Posts extends Model { } 
Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {sequelize, modelName: 'posts'})


module.exports = Posts