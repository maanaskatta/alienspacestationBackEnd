const express = require("express");
const router = express.Router();
const parkingController = require("../controllers/parking");

router.get("/getParkings", parkingController.getParkings);

router.post("/addParking", parkingController.addParking);

router.post("/updateParking", parkingController.updateParking);

router.post("/deleteParking", parkingController.deleteParking);

module.exports = router;
