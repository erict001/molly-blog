const router = require('express').Router();
const { User, Blog } = require('../models');


router.get("/",(req,res)=>{
    Blog.findAll({include:[User]}).then(blogs=>{
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        const loggedIn = req.session.loggedIn
        res.render("home",{
            blogs:hbsBlogs,
            loggedIn,
            username:req.session.user?.username})
    })
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        return res.redirect("/")
    } 
    //If the user isn't logged in, render the login template
    res.render("login")
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

router.get('/appetizers', async (req, res) => {
    try {
        await Blog.findAll({
            where: {
               blog_type: "Appetizers" 
            }
        }).then(blogs => {
            const appBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("appetizers",{ blogs: appBlogs})
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/wine-pairings', async (req, res) => {
    try {
        await Blog.findAll({
            where: {
               blog_type: "wine" 
            }
        }).then(blogs => {
            const appBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("wine-pairings",{ blogs: appBlogs})
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/desserts', async (req, res) => {
    try {
        await Blog.findAll({
            where: {
               blog_type: "desserts" 
            }
        }).then(blogs => {
            const appBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("desserts",{ blogs: appBlogs})
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/entrees', async (req, res) => {
    try {
        await Blog.findAll({
            where: {
               blog_type: "entrees" 
            }
        }).then(blogs => {
            const appBlogs = blogs.map(blog => blog.get({ plain: true }))
            res.render("entrees",{ blogs: appBlogs})
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/add-post', (req, res) => {
    const loggedIn = req.session.loggedIn
    res.render('backend', {
        loggedIn,
        username:req.session.user?.username})
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