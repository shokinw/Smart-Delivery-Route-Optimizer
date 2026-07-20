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