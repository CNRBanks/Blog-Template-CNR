const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');

Users.hasMany(Posts, {foreignKey: 'uid'});
Posts.belongsTo(Users, {foreignKey: 'uid'});

Posts.hasMany(Comments, {foreignKey: 'pid'})
Comments.belongsTo(Posts, {foreignKey: 'pid'});

module.exports = { Comments, Users, Posts }

// Users.hasMany(Posts, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Users.hasMany(Comments, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Posts.belongsTo(Users, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Posts.hasMany(Comments, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
// });

// Comments.belongsTo(Users, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comments.belongsTo(Posts, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE'
// });

// module.exports = {
//     Comments,
//     Posts,
//     Users
// };