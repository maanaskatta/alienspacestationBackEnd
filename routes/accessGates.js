const express = require("express");
const router = express.Router();
const accessGatesController = require("../controllers/accessGates");

router.get("/getAccessGates", accessGatesController.getAccessGates);

router.post("/addAccessGate", accessGatesController.addAccessGate);

router.post("/updateAccessGate", accessGatesController.updateAccessGate);

router.post("/deleteAccessGate", accessGatesController.deleteAccessGate);

module.exports = router;
