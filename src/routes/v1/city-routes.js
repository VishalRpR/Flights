const express=require("express");

const {cityController}=require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

console.log("inside city routes")



const router=express.Router();

router.post('/',
        CityMiddlewares.validateCreaterequest,
        cityController.createCity)


router.get('/',
    cityController.getCities)


router.get('/:id',
    cityController.getCity)


               
 router.delete('/:id',
    cityController.deleteCity)                

                

module.exports=router;