const express=require("express");

const {airplaneController}=require("../../controllers");

console.log("inside airplane routes")

const {AirplaneMiddlewares}=require('../../middlewares')

const router=express.Router();

router.post('/',
        AirplaneMiddlewares.validateCreaterequest,
        airplaneController.createAirplane)


router.get('/',
        airplaneController.getAirplanes)


router.get('/:id',
                airplaneController.getAirplane)


               
 router.delete('/:id',
                 airplaneController.deleteAirplane)                

                

module.exports=router;