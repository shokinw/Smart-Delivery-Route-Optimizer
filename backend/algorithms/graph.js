class Graph {

    constructor(){
        this.nodes = {};
    }


    addNode(node){
        if(!this.nodes[node]){
            this.nodes[node] = [];
        }
    }


    addEdge(node1,node2,distance){

        this.nodes[node1].push({
            node:node2,
            distance:distance
        });


        this.nodes[node2].push({
            node:node1,
            distance:distance
        });

    }


    getNeighbors(node){

        return this.nodes[node];

    }

}


module.exports = Graph;