const express=require("express");

const router=express.Router();


const {
    shortestRoute
}=require("../controllers/routeController");



router.get(
"/shortest",
shortestRoute
);



module.exports=router;