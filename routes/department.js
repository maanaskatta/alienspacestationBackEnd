const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/department");

router.get("/getDepartments", departmentController.getDepartments);

router.post("/addDepartment", departmentController.addDepartment);

router.post("/updateDepartment", departmentController.updateDepartment);

router.post("/deleteDepartment", departmentController.deleteDepartment);

module.exports = router;
