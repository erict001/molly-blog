const router = require('express').Router();
const blogRoutes = require('./blogRoutes');

router.use('/api/blogs', blogRoutes);

module.exports = router;