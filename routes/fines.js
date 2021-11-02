const express = require("express");
const router = express.Router();
const finesController = require("../controllers/fines");

router.get("/getFines", finesController.getFines);

router.post("/addFine", finesController.addFine);

router.post("/updateFine", finesController.updateFine);

router.post("/deleteFine", finesController.deleteFine);

module.exports = router;
