const router = require('express').Router();

const homeRoutes = require('./frontEndRoutes');
router.use('/', homeRoutes);

const backendRoutes = require('./api');
router.use("/api", backendRoutes);

// router.use("*", (req, res) => {
//     res.send("<h1>404</h1>")
// })

module.exports = router;