const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const routeRoutes=require("./routes/routeRoutes");


const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/routes",routeRoutes);


// MongoDB Connection
connectDB();



app.get("/",(req,res)=>{

    res.json({
        message:"Smart Delivery Route Optimizer API Running 🚚"
    });

});



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});
const locationRoutes = require("./routes/locationRoutes");


app.use("/api/locations",locationRoutes);