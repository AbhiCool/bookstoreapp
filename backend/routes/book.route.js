const express = require("express");

const router = express.Router();

const bookController = require("../controllers/book.controller");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/", isAuthenticated, bookController.getAllBooks);

module.exports = router;
