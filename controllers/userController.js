const db = require("../models");

module.exports = {
    findUUID: function (req, res) {
        db.User
            .findOne({ auth0ID: req.params.auth0ID })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}