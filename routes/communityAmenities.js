const express = require("express");
const router = express.Router();
const communityAmenitiesController = require("../controllers/communityAmenities");

router.get(
  "/getCommunityAmenities",
  communityAmenitiesController.getCommunityAmenities
);

router.post(
  "/addCommunityAmenity",
  communityAmenitiesController.addCommunityAmenity
);

router.post(
  "/updateCommunityAmenity",
  communityAmenitiesController.updateCommunityAmenity
);

router.post(
  "/deleteCommunityAmenity",
  communityAmenitiesController.deleteCommunityAmenity
);

module.exports = router;
