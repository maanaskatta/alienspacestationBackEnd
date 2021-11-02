const express = require("express");
const router = express.Router();
const announcementsController = require("../controllers/announcements");

router.get("/getAnnouncements", announcementsController.getAnnouncements);

router.post("/addAnnouncement", announcementsController.addAnnouncement);

router.post("/updateAnnouncement", announcementsController.updateAnnouncement);

router.post("/deleteAnnouncement", announcementsController.deleteAnnouncement);

module.exports = router;
