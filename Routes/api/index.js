const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");
const articlesRoutes = require("./articles");

// Post Routes
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/articles", articlesRoutes);

module.exports = router;