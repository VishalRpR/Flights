const { StatusCodes } = require('http-status-codes');
const {CityRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository=new CityRepository();


async function createCity(data){

    try {
        console.log("inside service")
        const city=await cityRepository.create(data);
    return city;
        
    } catch (error) {
      if(error.name=="SequelizeValidationError"){
        let explanation=[];
        error.errors.forEach((err) => {

          explanation.push(err.message)
           
        });
      
        throw new AppError(explanation,StatusCodes.BAD_REQUEST)

      }
       
      throw new AppError("Cannot create a new City Object",StatusCodes.BAD_REQUEST)
        
    }
    
}


async function getCities(){
  try {

    const cities=await cityRepository.getAll();
    return cities;
    
  } catch (error) {
    console.log(error)
    throw new AppError("cannot fetch data of all Cities",StatusCodes.BAD_REQUEST)
    
  }

}
async function getCity(id){
  try {
    
     
    const city=await cityRepository.get(id);
    return city;
    
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The City you requested is not present', error.statusCode);
    }
   
    throw new AppError("cannot fetch a data of City",StatusCodes.BAD_REQUEST)
    
  }

}

async function deleteCity(id){
  try {
    
     
    const city=await cityRepository.destroy(id);
    return city;
    
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The city you requested to delete is not present', error.statusCode);
    }
   
    throw new AppError("cannot delete city",StatusCodes.BAD_REQUEST)
    
  }

}

async function updateAirplane(id,data){

  try {
      console.log("inside service")
      const city=await cityRepository.create(id,data);
  return city;
      
  } catch (error) {
    if(error.name=="SequelizeValidationError"){
      let explanation=[];
      error.errors.forEach((err) => {

        explanation.push(err.message)
         
      });
    
      throw new AppError(explanation,StatusCodes.BAD_REQUEST)

    }
     
    throw new AppError("Cannot create a new City Object",StatusCodes.BAD_REQUEST)
      
  }
  
}


module.exports={
    createCity,
    getCities,
    getCity,
    deleteCity
};