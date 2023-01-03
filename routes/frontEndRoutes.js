const router = require('express').Router();
const path = require("path");
const { User, Blog } = require('../models');


router.get('/', async (req, res) => {
    try {
        await Blog.findAll().then(blogs => {
            const hbsBlogs = blogs.map(blog => blog.get({ plain: true }))
            // const loggedIn = req.session.user?true:false
            // res.render("home",{ blogs: hbsBlogs, loggedIn, username:req.session.user?.username})
            res.render("home",{ blogs: hbsBlogs})
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

router.get('/login', (req, res) => {
    // if(req.session.user){
    //     return res.redirect("/")
    // }
    res.render("login")
})

// router.get("/add-post",(req,res)=>{
//     if(!req.session.user){
//         return res.redirect("/login")
//     }
//     User.findByPk(req.session.user.id,{
//         include:[Blog, Comments]
//     }).then(userData=>{
//         console.log(userData);
//         const hbsData = userData.get({plain:true})
//         hbsData.loggedIn = req.session.user?true:false
//         res.render("backend",hbsData)
//     })
// })

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