const Graph=require("./graph");
const calculateDistance=require("./distance");


function generateGraph(locations){


const graph=new Graph();



locations.forEach(location=>{

    graph.addNode(location.name);

});



for(let i=0;i<locations.length;i++){


    for(let j=i+1;j<locations.length;j++){


        const distance =
        calculateDistance(
            locations[i].latitude,
            locations[i].longitude,
            locations[j].latitude,
            locations[j].longitude
        );


        graph.addEdge(
            locations[i].name,
            locations[j].name,
            Number(distance.toFixed(2))
        );


    }

}



return graph;


}


module.exports=generateGraph;