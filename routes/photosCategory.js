const express = require("express");
const router = express.Router();
const photosCategoryController = require("../controllers/photosCategory");

router.get("/getPhotoCategories", photosCategoryController.getPhotoCategories);

router.post("/addPhotoCategory", photosCategoryController.addPhotoCategory);

router.post(
  "/updatePhotoCategory",
  photosCategoryController.updatePhotoCategory
);

router.post(
  "/deletePhotoCategory",
  photosCategoryController.deletePhotoCategory
);

module.exports = router;
