const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');


const flightRepository=new FlightRepository();


async function createFlight(data){

    try {
        console.log("inside service")
        const flight=await flightRepository.create(data);
    return flight;
        
    } catch (error) {
      if(error.name=="SequelizeValidationError"){
        let explanation=[];
        error.errors.forEach((err) => {

          explanation.push(err.message)
           
        });
      
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)

      }
       
      throw new AppError("Cannot create a new Airplanes Object",StatusCodes.BAD_REQUEST)
        
    }
    
}




module.exports={
    createFlight,
};