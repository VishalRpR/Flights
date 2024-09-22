const { StatusCodes } = require('http-status-codes');
const {AirportRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');


const airportRepository=new AirportRepository();


async function createAirport(data){

    try {
        console.log("inside service")
        const airport=await airportRepository.create(data);
    return airport;
        
    } catch (error) {
      if(error.name=="SequelizeValidationError"||error.name=="SequelizeUniqueConstraintError"){
        let explanation=[];
        error.errors.forEach((err) => {

          explanation.push(err.message)
           
        });
      
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)

      }
       
      throw new AppError("Cannot create a new Airport Object",StatusCodes.BAD_REQUEST)
        
    }
    
}


async function getAirports(){
  try {

    const airports=await AirportRepository.getAll();
    return airports;
    
  } catch (error) {
    throw new AppError("cannot fetch a data of all airports",StatusCodes.BAD_REQUEST)
    
  }

}
async function getAirport(id){
  try {
    
     
    const airplanes=await airplaneRepository.get(id);
    return airplanes;
    
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested is not present', error.statusCode);
    }
   
    throw new AppError("cannot fetch a data of airplane",StatusCodes.BAD_REQUEST)
    
  }

}

async function deleteAirport(id){
  try {
    
     
    const airports=await airportRepository.destroy(id);
    return airports;
    
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested to delete is not present', error.statusCode);
    }
   
    throw new AppError("cannot delete airport",StatusCodes.BAD_REQUEST)
    
  }

}

async function updateAirport(id,data){

  try {
      console.log("inside service")
      const airports=await airportRepository.create(id,data);
  return airports;
      
  } catch (error) {
    if(error.name=="SequelizeValidationError"){
      let explanation=[];
      error.errors.forEach((err) => {

        explanation.push(err.message)
         
      });
    
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)

    }
     
    throw new AppError("Cannot create a new Airports Object",StatusCodes.BAD_REQUEST)
      
  }
  
}


module.exports={
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
};