const express = require("express");
const router = express.Router();
const aboutControllers = require("../controllers/aboutControllers");

router.get("/", aboutControllers.about);

module.exports = router;