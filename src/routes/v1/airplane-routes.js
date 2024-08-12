const express=require("express");

const {airplaneController}=require("../../controllers");

console.log("inside airplane routes")

const router=express.Router();

router.post('/',airplaneController.createAirplane)

module.exports=router;