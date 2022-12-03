const router = require('express').Router();
const path = require("path");
const { Blog } = require('../models');


router.get('/', function (req, res) {
    Blog.findAll().then(blogs => {
        const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
        // const loggedIn = req.session.user ? true:false
        res.render("home", { blogs: hbsBlogs })
        // res.render("home", { blogs: hbsBlogs, loggedIn, username:req.session.user?.username })

    })
});

router.get('/add-post', function (req, res) {
    res.render("backend")
});

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