const cnnction = require('../config/sequelizeConnect');
const {
    Posts,
    Users,
    Comments
} = require('../models')
const users = [
    {
        username: 'Test',
        password: 'test123'
    },

    {
        username: 'Frank',
        password: 'test13323'
    },
]

const posts = [
    {
        title: 'Thunderbird',
        content: 'W/e',
        user_id: 1
    },

    {
        title: 'turd',
        content: 'W/buttt',
        user_id: 2
    },
]

const comments = [
    {
        content: 'this is rough',
        user_id: 2
    },

    {
        content: 'this is ruff',
        user_id: 1
    },
]

(async () => {
    await Users.bulkCreate(users);
    await Posts.bulkCreate(posts)
    await Comments.bulkCreate(comments)
} ) ();