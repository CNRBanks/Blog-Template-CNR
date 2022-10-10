const Comments = require('./comments');
const Posts = require('./posts');
const Users = require('./users');

Users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Comments,
    Posts,
    Users
};