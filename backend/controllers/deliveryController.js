const Delivery = require("../models/Delivery");



// Add Delivery

exports.addDelivery = async(req,res)=>{

try{

const delivery = await Delivery.create(req.body);


res.status(201).json(delivery);


}
catch(error){

res.status(500).json({

message:error.message

});

}


};




// Get Deliveries

exports.getDeliveries = async(req,res)=>{


try{


const deliveries = await Delivery.find();


res.json(deliveries);


}
catch(error){

res.status(500).json({

message:error.message

});

}


};