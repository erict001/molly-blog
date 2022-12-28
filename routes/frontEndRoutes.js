const router = require('express').Router();
const path = require("path");
const { Blog } = require('../models');


router.get('/', async (req, res) => {
    try {
        await Blog.findAll().then(blogs => {
            const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("home", { blogs: hbsBlogs })
        })
    } catch (err) {
        res.status(500).json(err)
    }
    // res.render("home")
});

router.get('/recipes', async (req, res) => {
    try {
        await Blog.findAll().then(blogs => {
            const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("recipes", { blogs: hbsBlogs })
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/add-post', (req, res) => {
    res.render('backend')
});

router.get("/about", (req, res) => {
    res.render("about")
});


router.get("/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id)
        const blogIndividual = blogData.get({ plain: true })
        res.render("blog", { blogs: blogIndividual })
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;