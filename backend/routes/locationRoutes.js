const express = require("express");

const router = express.Router();


const {
  addLocation,
  getLocations,
  deleteLocation,
  updateLocation,
} = require("../controllers/locationController");



router.post("/", addLocation);

router.put("/:id", updateLocation);
router.get("/", getLocations);

router.delete("/:id",deleteLocation);



module.exports = router;