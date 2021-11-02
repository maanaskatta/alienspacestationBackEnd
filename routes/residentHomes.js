const express = require("express");
const router = express.Router();
const apartmentAmenitiesController = require("../controllers/apartmentAmenities");

router.get(
  "/getApartmentAmenities",
  apartmentAmenitiesController.getApartmentAmenities
);

router.post(
  "/addApartmentAmenity",
  apartmentAmenitiesController.addApartmentAmenity
);

router.post(
  "/updateApartmentAmenity",
  apartmentAmenitiesController.updateApartmentAmenity
);

router.post(
  "/deleteApartmentAmenity",
  apartmentAmenitiesController.deleteApartmentAmenity
);

module.exports = router;
