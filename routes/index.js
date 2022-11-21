const router = require('express').Router();

const homeRoutes = require('./frontEndRoutes');
router.use('/', homeRoutes);

const backendRoutes = require('./api');
router.use("/api", backendRoutes);

module.exports = router;