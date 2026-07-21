import axios from "axios";


const API = axios.create({

baseURL: "https://smart-delivery-route-optimizer.onrender.com"

});



export const getLocations = ()=>{

return API.get("/locations");

};



export const addLocation = (data)=>{

return API.post("/locations",data);

};



export const deleteLocation = (id)=>{

return API.delete(`/locations/${id}`);

};



export const updateLocation = (id,data)=>{

return API.put(`/locations/${id}`,data);

};



export const getShortestRoute = (start,end)=>{

return API.get(
`/routes/shortest?start=${start}&end=${end}`
);

};
// Get Deliveries

export const getDeliveries = ()=>{

    return API.get("/deliveries");

};


// Add Delivery

export const addDelivery = (data)=>{

    return API.post("/deliveries",data);

};

export const optimizeRoute = (stops)=>{

    return API.post(
        "/routes/multi",
        {
            stops
        }
    );

};


export default API;