const router = require('express').Router();
const path = require("path");
const { Blog } = require('../models');


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

router.get('/add-post', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/backend.html'))
})

router.get('/:id', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/blogs.html'))
})

//localhost:3000/blog/:id
router.get("/blog/:id", (req, res) => {
    console.log(req.params.id)
    Blog.findByPk(req.params.id,)
      .then(dbBlog => {
        console.log("====================")
        const blogData = dbBlog.get({plain:true})
        console.log(blogData);
        res.sendFile(path.join(__dirname, '../public/views/blogs.html'))
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });


module.exports = router;