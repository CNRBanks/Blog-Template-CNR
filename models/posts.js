const sequelize = require('sequelize');
const sequelizeConnect = require('../config/sequelizeConnect');


const Posts = sequelizeConnect.define('post', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    content: {
        type: sequelize.TEXT,
        allowNull: false
    },

    user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: "Users",
            key: 'id'
        }
    }


}, {
    sequelize: sequelizeConnect,
    timestamps: true,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});

module.exports = Posts