const express = require("express");
const router = express.Router();
const rentHistoryController = require("../controllers/rentHistory");

router.get("/getRentHistories", rentHistoryController.getRentHistories);

module.exports = router;
