const express = require("express");
const router = express.Router();

const userController = require("../controller/user_controller");

router.get("/search", userController.search);
router.get("/:id", userController.getUser);
router.post("/login", userController.createSession);
router.post("/signup", userController.createUser);
router.post("/edit", userController.editUser);

module.exports = router;
