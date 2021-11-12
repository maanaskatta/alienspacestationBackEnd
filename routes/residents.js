const express = require("express");
const router = express.Router();
const residentsController = require("../controllers/residents");

router.get("/getResidents", residentsController.getResidents);

router.post("/addResident", residentsController.addResident);

router.post("/updateResident", residentsController.updateResident);

router.get("/getHomes", residentsController.getHomes);

module.exports = router;
