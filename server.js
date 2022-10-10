const path = require('path');
const helper = require('./utils/helpers');
const expHandlebars = require('express-handlebars');
const session = require('express-session');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelizeConnect = require('./config/sequelizeConnect');
const storedSequelize = require('connect-session-sequelize')(session.Store);

const sesh = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new storedSequelize({
        db: sequelizeConnect
    })
};

app.use(session(sesh))

const hndlbrs = expHandlebars.create({ helper });

app.engine('handlebars', hndlbrs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log('App is listening patiently on ${PORT}!');
    sequelizeConnect.sync({force: true});
});
