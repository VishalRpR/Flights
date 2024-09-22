const express = require('express');

const airplaneRoutes=require('./airplane-routes');
const airportRoutes=require('./airport-routes');
const flightRoutes=require('./flight-routes')

const cityRoutes=require('./city-routes')
const router = express.Router();
console.log("inside v1 routes")

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);
router.use('/flights',flightRoutes)


module.exports = router;