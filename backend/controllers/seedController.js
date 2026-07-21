const Location = require("../models/Location");
const lpuLocations = require("../algorithms/lpuLocations");

exports.seedLPU = async (req, res) => {
  try {

    await Location.deleteMany({});

    await Location.insertMany(lpuLocations);

    res.json({
      message: "LPU Locations Added Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};