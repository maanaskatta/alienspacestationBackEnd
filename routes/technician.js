const express = require("express");
const router = express.Router();
const technicianController = require("../controllers/technician");

router.get("/getTechnicians", technicianController.getTechnicians);

router.post("/addTechnician", technicianController.addTechnician);

router.post("/updateTechnician", technicianController.updateTechnician);

router.post("/deleteTechnician", technicianController.deleteTechnician);

module.exports = router;
