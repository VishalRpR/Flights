const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');


const airplaneRepository=new AirplaneRepository();


async function createAirplane(data){

    try {
        console.log("inside service")
        const airplane=await airplaneRepository.create(data);
    return airplane;
        
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


async function getAirplanes(){
  try {

    const airplanes=await airplaneRepository.getAll();
    return airplanes;
    
  } catch (error) {
    throw new AppError("cannot fetch a data of all airplanes",StatusCodes.BAD_REQUEST)
    
  }

}
async function getAirplane(id){
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

async function deleteAirplane(id){
  try {
    
     
    const airplanes=await airplaneRepository.destroy(id);
    return airplanes;
    
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested to delete is not present', error.statusCode);
    }
   
    throw new AppError("cannot delete airplane",StatusCodes.BAD_REQUEST)
    
  }

}

async function updateAirplane(id,data){

  try {
      console.log("inside service")
      const airplane=await airplaneRepository.create(id,data);
  return airplane;
      
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
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane
};