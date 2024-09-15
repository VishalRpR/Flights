const express = require('express');

const airplaneRoutes=require('./airplane-routes');
const cityRoutes=require('./city-routes')
const router = express.Router();
console.log("inside v1 routes")

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);


module.exports = router;