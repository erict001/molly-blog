const router = require('express').Router();
const path = require("path");
const { Blog } = require('../models');


router.get('/', function (req, res) {
    Blog.findAll().then(blogs => {
        const hbsBlogs = blogs.map(blog => blog.get({plain:true}))
        res.render("home", {blogs: hbsBlogs})
    })
    // res.sendFile(path.join(__dirname, '../public/views/index.html'))
})

router.get('/add-post', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/backend.html'))
})

router.get("/:id", (req, res) => {
    Blog.findByPk(req.params.id)
    .then(dbBlog => {
        console.log("====================")
        res.render("blog", {blogs: dbBlog})
        // res.render("comment", {blogs:blogData,loggedIn,username:req.session.user?.username})
      })});


module.exports = router;