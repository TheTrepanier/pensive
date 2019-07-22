const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
    .get(articlesController.findAllArticles);

router.route("/:category")
    .get(articlesController.findArticleByCategory);

router.route("/:id")
    .delete(articlesController.removeArticle);