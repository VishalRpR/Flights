const {AirplaneService}=require('../services');
const{ StatusCodes }=require('http-status-codes')

async function createAirplane(req,res){
try {

    console.log("inside controller")
    const airplane=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
    })


    return res
    .status(StatusCodes.CREATED)
    .json({
        success:true,
        message:"successfully created the airplane",
        data:airplane,
        error:{}
    });


} catch (error) {

    console.log(error)
   return res
           .status(StatusCodes.INTERNAL_SERVER_ERROR)
           .json({
            success:false,
            message:"something went wrong with while creating the airplane",
            data:{},
            error:error
           })
    
}
}

module.exports={
    createAirplane
}