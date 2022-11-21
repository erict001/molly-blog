const router = require('express').Router();
const path = require("path");
const { Blog } = require("../../models");

// BACK END
router.get("/", (req, res) => {
  Blog.findAll({include:[User, Comments]})
    .then(dbBlogs => {
      res.json(dbBlogs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.get("/:id", (req, res) => {
  Blog.findByPk(req.params.id,{include:[User, Comments]})
    .then(dbBlog => {
      res.json(dbBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
  Blog.create({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newBlog => {
      res.json(newBlog);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.put("/:id", async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, 
    {
      where: {
      id: req.params.id
    },
    })
  .then((updatedBlog) => {
    res.redirect("/home");
  })
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  }
});

router.delete("/:id", (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id
    }
  }).then(delBlog => {
    res.json(delBlog);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

router.get("*", function (req, res) {
  res.send("404")
})

module.exports = router;