const express = require("express");
const router = express.Router();
const workOrdersController = require("../controllers/workOrders");

router.get("/getWorkOrders", workOrdersController.getWorkOrders);

router.post("/addWorkOrder", workOrdersController.addWorkOrder);

router.post("/updateWorkOrder", workOrdersController.updateWorkOrder);

module.exports = router;
