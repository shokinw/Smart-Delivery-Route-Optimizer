const dijkstra = require("./dijkstra");


function multiStopRoute(graph, stops){


    if(!stops || stops.length < 2){

        throw new Error(
            "At least 2 stops required"
        );

    }



    let totalDistance = 0;

    let fullPath = [];




    for(let i=0;i<stops.length-1;i++){



        const result = dijkstra(

            graph,

            stops[i],

            stops[i+1]

        );



        totalDistance += result.distance;



        if(i===0){

            fullPath.push(
                ...result.path
            );

        }

        else{


            fullPath.push(
                ...result.path.slice(1)
            );


        }


    }




    return {


        distance:Number(
            totalDistance.toFixed(2)
        ),


        path:fullPath


    };


}



module.exports = multiStopRoute;