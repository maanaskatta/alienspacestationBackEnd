const express = require("express");
const router = express.Router();
const communityEventsController = require("../controllers/communityEvents");

router.get("/getCommunityEvents", communityEventsController.getCommunityEvents);

router.post("/addCommunityEvent", communityEventsController.addCommunityEvent);

router.post(
  "/updateCommunityEvent",
  communityEventsController.updateCommunityEvent
);

router.post(
  "/deleteCommunityEvent",
  communityEventsController.deleteCommunityEvent
);

module.exports = router;
