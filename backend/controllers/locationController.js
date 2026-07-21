const Location = require("../models/Location");


// Add new location
exports.addLocation = async(req,res)=>{

    try{

        const location = await Location.create(req.body);

        res.status(201).json(location);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Get all locations
exports.getLocations = async(req,res)=>{

    try{

        const locations = await Location.find();

        res.json(locations);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

// Delete location

exports.deleteLocation = async(req,res)=>{

    try{

        const location = await Location.findByIdAndDelete(
            req.params.id
        );


        if(!location){

            return res.status(404).json({
                message:"Location not found"
            });

        }


        res.json({
            message:"Location deleted successfully"
        });


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!location) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    res.json(location);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};