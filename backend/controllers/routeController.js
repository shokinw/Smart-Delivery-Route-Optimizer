const Location = require("../models/Location");

const generateGraph = require("../algorithms/graphGenerator");

const dijkstra = require("../algorithms/dijkstra");

const multiStopRoute = require("../algorithms/multiStopRoute");


// NORMAL SHORTEST ROUTE

exports.shortestRoute = async(req,res)=>{

    try{

        const {start,end}=req.query;


        const locations = await Location.find();


        if(locations.length===0){

            return res.status(404).json({
                message:"No locations found"
            });

        }


        const graph = generateGraph(locations);



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





// MULTI STOP ROUTE

exports.multiRoute = async(req,res)=>{

    try{


        const {stops}=req.body;



        if(!stops || !Array.isArray(stops)){

            return res.status(400).json({

                message:"Stops array required"

            });

        }



        const locations = await Location.find();



        const graph = generateGraph(locations);



        const result = multiStopRoute(
            graph,
            stops
        );



        res.json(result);



    }
    catch(error){


        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


};