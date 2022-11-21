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

// // FRONT END

// app.get('/', function (req, res) {
//   // res.send('Hello Borld')
//   res.sendFile(path.join(__dirname, '/public/views/index.html'))
// })

// app.get('/add-post', function (req, res) {
//   res.sendFile(path.join(__dirname, '/public/views/backend.html'))
// })

// // BACK END
// app.get("/api/blogs", (req, res) => {
//   // Blog.findAll().then((blogData) => {
//   //   res.json(blogData)
//   // })
//   console.log(blogs)
//   res.json(blogs)
// })

// app.get("/api/blogs/:id", (req, res) => {
//   // res.json(blogs)
//   for (let i = 0; i < blogs.length; i++) {
//     if (blogs[i].id == req.params.id) {
//       return res.json(blogs[i])
//     }
//   }
// })

// app.post("/api/blogs", (req, res) => {
//   console.log(req.body)
//   blogs.push(req.body)
//   res.json(blogs)
// })

// app.put("/api/blogs/:id", (req, res) => {
//   console.log(req.body)
//   for (let i = 0; i < blogs.length; i++) {
//     if (blogs[i].id == req.params.id) {
//       blogs[i] = req.body
//     }
//   }
//   res.json(blogs)
// })

// app.get("*", function (req, res) {
//   res.send("404")
// })


// app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));
})