const express = require("express");
const controller = require("../controller/User.controller.js");

const { validateUser, validateUserUpdate } = require("../middleware/Validation.js");

const router = express.Router();




router.get("/", controller.getAll);

router.post("/", validateUser, controller.create)


router.get("/:id", controller.getOne);

router.put("/:id", validateUserUpdate, controller.update)

router.delete("/:id", controller.remove)


router.get("/recent-user", controller.getRecentUser);







module.exports = router