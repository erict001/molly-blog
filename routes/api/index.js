const express = require('express');
const router = express.Router();

const blogRoutes = require('./blogRoutes');
router.use("/blogs",blogRoutes);

const userRoutes = require("./userRoutes");
router.use("/users",userRoutes)

module.exports = router;