const express=require("express");

const router=express.Router();


const {
addDelivery,
getDeliveries
}=require("../controllers/deliveryController");



router.post("/",addDelivery);


router.get("/",getDeliveries);



module.exports=router;