const express = require("express");
const router = express.Router();
const residentHomesController = require("../controllers/residentHomes");

router.get("/getResidentHomes", residentHomesController.getResidentHomes);

router.post("/addResidentHome", residentHomesController.addResidentHome);

router.post("/deleteResidentHome", residentHomesController.deleteResidentHome);

module.exports = router;
