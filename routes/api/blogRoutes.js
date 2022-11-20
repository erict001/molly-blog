// BACK END
app.get("/api/blogs", (req, res) => {
    Blog.findAll().then((blogData) => {
      res.json(blogData)
    })
    console.log(blogs)
    res.json(blogs)
  })
  
  app.get("/api/blogs/:id", (req, res) => {
    // res.json(blogs)
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].id == req.params.id) {
        return res.json(blogs[i])
      }
    }
  })
  
  app.post("/api/blogs", (req, res) => {
    console.log(req.body)
    blogs.push(req.body)
    res.json(blogs)
  })
  
  app.put("/api/blogs/:id", (req, res) => {
    console.log(req.body)
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].id == req.params.id) {
        blogs[i] = req.body
      }
    }
    res.json(blogs)
  })
  
  app.get("*", function (req, res) {
    res.send("404")
  })