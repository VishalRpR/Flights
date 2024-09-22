const express=require("express");

const {airportController}=require("../../controllers");
const {AirportMiddlewares } = require("../../middlewares");

console.log("inside airplane routes");

const router=express.Router();

router.post('/',
    AirportMiddlewares.validateCreaterequest,
      airportController.createAirport)


router.get('/',
    airportController.getAirports)


router.get('/:id',
    airportController.getAirport)


               
 router.delete('/:id',
    airportController.deleteAirport)                

                

module.exports=router;