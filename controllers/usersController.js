const User = require('../models/user');

module.exports = {
    findAll: function(req, res){
        User
        .find(req.query)

    },
    findById: function (req, res){
        User.findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res){
        User
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
};