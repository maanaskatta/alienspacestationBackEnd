const express = require("express");
const router = express.Router();
const leaseTermController = require("../controllers/leaseTerm");

router.get("/getLeaseTerms", leaseTermController.getLeaseTerms);

router.post("/addLeaseTerm", leaseTermController.addLeaseTerm);

router.post("/updateLeaseTerm", leaseTermController.updateLeaseTerm);

router.post("/deleteLeaseTerm", leaseTermController.deleteLeaseTerm);

module.exports = router;
