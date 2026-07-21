const express = require("express");

const router = express.Router();


const {
    shortestRoute,
    multiRoute
}=require("../controllers/routeController");



router.get(
"/shortest",
shortestRoute
);



router.post(
"/multi",
multiRoute
);



module.exports = router;