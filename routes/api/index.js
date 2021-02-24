const router = require("express").Router();
const userRoutes = require('./users');
const authRoutes = require('./auth');
// Post routes
router.use('/auth', authRoutes);
router.use("/users", userRoutes);


module.exports = router;