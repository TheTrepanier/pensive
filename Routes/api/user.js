const router = require("express").Router();
const userController = require("../../controllers/userController");
const checkJwt = require("../../jwtMiddleware");

router.use(checkJwt);

router.route("/")
    .post(userController.create);

router.route("/:auth0ID")
    .get(userController.findUUID);

module.exports = router;