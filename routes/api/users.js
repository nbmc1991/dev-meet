const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { default: axios } = require('axios');

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
  axios({
    method: 'get',
    url: 'https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture,location',
    responseType: 'json',
  }).then(({data}) => {
    console.log(data);
    res.json(data)
  }).catch(err => res.json(err))
});



module.exports = router;
