const router = require('express').Router();
const path = require("path")

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

router.get('/add-post', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/backend.html'))
})

router.get('/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/backend.html'))
})

module.exports = router;