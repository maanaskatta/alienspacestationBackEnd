const express = require("express");
const router = express.Router();
const unitsController = require("../controllers/units");

router.get("/getUnits", unitsController.getUnits);

router.post("/addUnit", unitsController.addUnit);

router.post("/updateUnit", unitsController.updateUnit);

router.post("/deleteUnit", unitsController.deleteUnit);

module.exports = router;
