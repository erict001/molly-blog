const express = require('express')
const app = express()
const path = require('path')
const Blog = require('./models');
const sequelize = require('./config/connection');
const routes = require('./routes');
const mysql = require('mysql2');

const port = 3000


// Static directory
app.use(express.static('public'));
//allows the app to use JSON data
app.use(express.json())
//This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));

// WORKING ON MODULARIZING ROUTES
app.use(routes)

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

db.query('SELECT * FROM blogs', function (err, results) {
  console.log(results);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));
})