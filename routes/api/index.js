const router = require("express").Router();
const userRoutes = require('./users');
const authRoutes = require('./auth');
const postRoutes = require('./posts');
// Post routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;