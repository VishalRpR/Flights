const express=require("express");

const {flightController}=require("../../controllers");

console.log("inside airplane routes")

const {FlightMiddlewares}=require('../../middlewares')

const router=express.Router();

router.post('/',
        FlightMiddlewares.validateCreaterequest,
        flightController.createFlight)

router.get('/',
         flightController.getAllFlights)
         
module.exports=router;