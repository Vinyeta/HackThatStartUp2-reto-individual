const { Router } = require("express");
const userController = require("./user.controller");

const router = Router();

router.route("/").get(userController.findAll);

router.route("/addList").post(userController.addList);

router
  .route("/:username")
  .get(userController.get)
  .patch(userController.update)
  .delete(userController.remove);

module.exports = router;
