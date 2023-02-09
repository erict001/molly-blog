const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path')
const sequelize = require('./config/connection.js');
const routes = require('./routes');
const mysql = require('mysql2');
const Uploader = require("uploader");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
const port = 3001

// Static directory
app.use(express.static('public'));
//allows the app to use JSON data
app.use(express.json())
//This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    dialect: "mysql",
    port: 3306
  },
  console.log(`Connected to the molly_blogs_db database.`)
);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//Initializing Express Handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views')


app.use("/", routes)

db.query('SELECT * FROM blogs', function (err, results) {
  console.log(results);
});

sequelize.sync({ force: false }).then(function () {
  app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));
})