const db = require("../models");

module.exports = {
    findAllPosts = function (req, res) {
        db.UserPosts
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create = function (req, res) {
        db.UserPosts
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};