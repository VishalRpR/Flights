const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreaterequest(req,res,next){

    ErrorResponse.message="something went wrong with while creating the airplane";
    ErrorResponse.error=new AppError(["flightNumber/airplaneId/departureAirportId/arrivalAirportId/arrivalTime/departureTime/price/price not found in the correct form"],StatusCodes.BAD_REQUEST)

    if(!req.body.flightNumber){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.airplaneId){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.departureAirportId){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.arrivalTime){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.arrivalAirportId){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.departureTime){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.price){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }
    if(!req.body.totalSeats){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }

    next();




}


module.exports={
    validateCreaterequest
}