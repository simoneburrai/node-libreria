const express = require("express");
const router = express.Router();

const controller = require("../controllers/bookController.js");


router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.store);
router.delete("/:id", controller.destroy);
router.put("/:id", controller.update);
router.patch("/:id", controller.modify);

module.exports = router;