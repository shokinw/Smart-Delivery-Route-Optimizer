const Location = require("../models/Location");

const generateGraph = require("../algorithms/graphGenerator");

const dijkstra = require("../algorithms/dijkstra");



exports.shortestRoute = async(req,res)=>{


    try{


        const {start,end}=req.query;



        // Get locations from MongoDB

        const locations = await Location.find();



        if(locations.length === 0){

            return res.status(404).json({
                message:"No locations found"
            });

        }



        // Generate graph

        const graph = generateGraph(locations);



        // Run Dijkstra

        const result = dijkstra(
            graph,
            start,
            end
        );



        res.json(result);



    }
    catch(error){


        res.status(500).json({
            message:error.message
        });


    }


};