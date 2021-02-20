const models = require('../models/');

module.exports = {
    findAll: function(req, res){
        models.User.find(req.query)

    }
}