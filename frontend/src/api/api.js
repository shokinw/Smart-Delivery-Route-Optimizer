import axios from "axios";


const API = axios.create({

    baseURL:"http://localhost:5000/api"

});


// Get locations

export const getLocations = ()=>{

    return API.get("/locations");

};


// Get shortest route

export const getShortestRoute = (start,end)=>{

    return API.get(
        `/routes/shortest?start=${start}&end=${end}`
    );

};



export default API;