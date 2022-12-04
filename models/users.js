const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Users = pls.defineUser(sequelize, {
// will update with additional columns later

  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Users
