const sequelize = require('sequelize')
const sequelizeConnect = require('../config/sequelizeConnect')

const Users = sequelizeConnect.define('user', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    username: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5, 25],
        }
    },

    password: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            len: [10, 50],
        }
    }

}, {
    sequelize: sequelizeConnect,
    timestamps: true,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});