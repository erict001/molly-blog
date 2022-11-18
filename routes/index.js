const app = require('express').Router();
const Blog = require('../models/blogs');

app.get('/', function (req, res) {
    // res.send('Hello Borld')
    res.sendFile(path.join(__dirname, '/public/views/index.html'))
})

app.get('/add-post', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/backend.html'))
})