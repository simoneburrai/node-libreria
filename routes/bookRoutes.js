const express = require("express");
const router = express.Router();
const validateBooksMiddleware = require("../middlewares/validateBook.js")

const controller = require("../controllers/bookController.js");


router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", validateBooksMiddleware, controller.store);
router.delete("/:id", controller.destroy);
router.put("/:id", validateBooksMiddleware, controller.update);
router.patch("/:id", controller.modify);

module.exports = router;