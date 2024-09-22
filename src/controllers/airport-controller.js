const {AirportService}=require('../services');
const{ StatusCodes }=require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { getAirports } = require('../services/airport-service');


async function createAirport(req,res){
try {

    console.log("inside controller")
    const airport=await AirportService.createAirport({
        name:req.body.name,
        code:req.body.code,
        address:req.body.address,
        cityId:req.body.cityId
    })

      SuccessResponse.data=airport;
    return res
    .status(StatusCodes.CREATED)
    .json(SuccessResponse);


} catch (error) {
    ErrorResponse.error=error;

    console.log(error)
   return res
           .status(error.statusCode)
           .json(ErrorResponse)
    
}
}


async function getAirport(req,res){
    try {
        const airports= await AirportService.getAirport();
        SuccessResponse.data=airports;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);

        
    } catch (error) {

        ErrorResponse.error=error;

        console.log(error)
       return res
               .status(error.statusCode)
               .json(ErrorResponse)
        
    }


}


async function getAirport(req,res){
    try {
        
     
        const airport= await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);

        
    } catch (error) {

        ErrorResponse.error=error;

        console.log(error)
       return res
               .status(error.statusCode)
               .json(ErrorResponse)
        
    }


}

async function deleteAirport(req,res){
    try {
        
     
        const airport= await AirportService.deleteAirport(req.params.id);
        SuccessResponse.data=airport;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse);

        
    } catch (error) {

        ErrorResponse.error=error;

        console.log(error)
       return res
               .status(error.statusCode)
               .json(ErrorResponse)
        
    }


}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
}