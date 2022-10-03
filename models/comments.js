const sequelize = require('sequelize');
const sequelizeConnect = require('../config/sequelizeConnect');


const Comments = sequelizeConnect.define('comment', {
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

    post_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: "Posts",
            key: 'id'
        }
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
    modelName: 'comments',
    underscored: true
});

module.exports = Comments