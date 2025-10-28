const express = require("express");

const router = express.Router();

const contactusController = require("../controllers/contactus.controller");

router.post("/", contactusController.addContactUs);

module.exports = router;
