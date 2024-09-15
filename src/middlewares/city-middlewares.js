const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreaterequest(req,res,next){

    ErrorResponse.message="something went wrong with while creating the airplane";
    ErrorResponse.error=new AppError(["model number not found in the correct form"],StatusCodes.BAD_REQUEST)

    if(!req.body.name){
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);

       
    }

    next();




}


module.exports={
    validateCreaterequest
}