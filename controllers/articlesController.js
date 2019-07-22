const db = require("../models");

module.exports = {
    findAllArticles: function (req, res) {
        db.Article
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findArticleByCategory: function (req, res) {
        db.Article
            .find({category: req.params.category})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeArticle: function (req, res) {
        db.Article
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};