const User = require('../models/user');

module.exports = {
    findAll: function(req, res){
        User.find(req.query)

    }
}