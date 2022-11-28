const router = require('express').Router();
const path = require("path");
const { Blog } = require('../models');


router.get('/', function (req, res) {
    Blog.findAll().then(blogs => {
        const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
        res.render("home", { blogs: hbsBlogs })
    })
})

router.get('/add-post', function (req, res) {
    res.render("backend")
    // res.sendFile(path.join(__dirname, '../public/views/backend.html'))
})

router.get("/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id)
         const blogIndividual = blogData.get({plain: true})
         res.render("blog", {blogs: blogIndividual})
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;