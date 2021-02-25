const router = require('express').Router();
const usersController = require('../../controllers/usersController');

//matched with '/api/users'
// router
// .route('/')
// .get(usersController.findAll);

//matches with '/api/users/:id'
// router
// .route(':id')
// .get(usersController.findById);

// module.exports = router;


router.get('/', (req, res) => {
  // const { _id, name, email, date } = req.user;
  // return res.json({ _id, name, email, date });
  res.send('hello!!!')
});

module.exports = router;
