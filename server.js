const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const path = require('path')
const sequelize = require('./config/connection.js');
const routes = require('./routes');
const mysql = require('mysql2');

const port = 3000

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
    user: 'root',
    // MySQL password
    password: '',
    database: 'molly_blogs_db'
  },
  console.log(`Connected to the molly_blogs_db database.`)
);

// WORKING ON MODULARIZING ROUTES
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