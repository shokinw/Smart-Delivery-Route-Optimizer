const Graph=require("./graph");

const dijkstra=require("./dijkstra");


const graph=new Graph();



graph.addNode("Warehouse");
graph.addNode("Restaurant");
graph.addNode("Customer");



graph.addEdge(
"Warehouse",
"Restaurant",
5
);


graph.addEdge(
"Restaurant",
"Customer",
3
);



const result=dijkstra(
graph,
"Warehouse",
"Customer"
);



console.log(result);