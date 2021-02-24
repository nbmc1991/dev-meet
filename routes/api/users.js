const router = require('express').Router();

// const userController = require('../controllers/usersController');

// router.get('/', (req, res) => res.status(200).send('Hello!!!'));

router.get('/users', function (req, res) {
  
    res.send('hello world')
  });

module.exports= router;
