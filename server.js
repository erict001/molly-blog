const express = require('express')
const app = express()
const path = require('path')
const blogs = require('./db/blogs');

const port = 3000


// Static directory
app.use(express.static('public'));
app.use(express.json())

// FRONT END

app.get('/', function (req, res) {
  // res.send('Hello Borld')
  res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.get('/add-post', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/views/backend.html'))
})

// BACK END
app.get("/api/blogs", (req, res) => {
  console.log(blogs)
  res.json(blogs)
})

app.get("/api/blogs/:id", (req, res) => {
  // res.json(blogs)
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == req.params.id) {
      return res.json(blogs[i])
    }
  }
})

app.post("/api/blogs", (req, res) => {
  console.log(req.body)
  blogs.push(req.body)
  res.json(blogs)
})

app.put("/api/blogs/:id", (req, res) => {
  console.log(req.body)
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id == req.params.id) {
      blogs[i] = req.body
    }
  }
  res.json(blogs)
})

app.get("*", function (req, res) {
  res.send("404")
})


app.listen(port, () => {
  console.log(`server listening on port: http://localhost:${port}`)
})