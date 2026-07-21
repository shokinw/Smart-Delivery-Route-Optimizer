const express = require("express");

const router = express.Router();

const { seedLPU } = require("../controllers/seedController");

router.post("/lpu", seedLPU);

module.exports = router;