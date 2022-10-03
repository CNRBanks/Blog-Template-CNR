const sequelize = require('sequelize');
const sequelizeConnect = require('../config/sequelizeConnect');
const bcrypt = require('bcrypt');

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

Users.beforeCreate(async beef => {
    beef.password = await bcrypt.hash(beef.password, 5)
} )

module.exports = Users