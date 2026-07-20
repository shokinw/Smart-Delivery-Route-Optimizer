const PriorityQueue = require("./priorityQueue");


function dijkstra(graph,start,end){


    const distances={};

    const previous={};


    const pq=new PriorityQueue();



    for(let node in graph.nodes){

        distances[node]=Infinity;
        previous[node]=null;

    }



    distances[start]=0;


    pq.enqueue(start,0);



    while(!pq.isEmpty()){


        const current=pq.dequeue();


        let currentNode=current.element;



        if(currentNode===end)
            break;



        graph.getNeighbors(currentNode)
        .forEach(neighbor=>{


            let distance =
            distances[currentNode]
            +
            neighbor.distance;



            if(distance < distances[neighbor.node]){


                distances[neighbor.node]=distance;


                previous[neighbor.node]=currentNode;



                pq.enqueue(
                    neighbor.node,
                    distance
                );

            }


        });



    }



    // Build path

    let path=[];

    let current=end;


    while(current){

        path.unshift(current);

        current=previous[current];

    }



    return {

        distance:distances[end],
        path:path

    };


}



module.exports=dijkstra;