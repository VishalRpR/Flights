const { StatusCodes } = require('http-status-codes');
const {FlightRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const { Op } = require('sequelize');
const {Flight}=require('../models')


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


async function getAllFlights(query){
   
    let customFilter={};
    let sortFilter=[];
    const endingTripTime="23:59:00";

    if(query.trips){
      [departureAirportId, arrivalAirportId] = query.trips.split("-");
      if(departureAirportId!=arrivalAirportId){
      customFilter.departureAirportId = departureAirportId;
      customFilter.arrivalAirportId = arrivalAirportId; 
       }
    }

    if(query.price){
      [minPrice,maxPrice]=query.price.split("-");
      customFilter.price={
        [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]

      }
    }

    if(query.travellers) {
      customFilter.totalSeats = {
          [Op.gte]: query.travellers
      }
  }

  if(query.tripDate) {
    customFilter.departureTime = {
        [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
    }
}


if(query.sort) {
  const params = query.sort.split(',');
  const sortFilters = params.map((param) => param.split('_'));
  sortFilter = sortFilters
}
console.log(customFilter, sortFilter);

    try {

      const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
      return flights;

    } catch(error) {
      
          throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getFlight(data){

  try {
      console.log("inside service")
      const flight=await flightRepository.get(data);
      return flight;
      
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The flight you requested is not present', error.statusCode);
  }
  throw new AppError('Cannot fetch data of all the flight', StatusCodes.INTERNAL_SERVER_ERROR);
  }
  
}


async function updateSeats(data){
try {

  const flightseats=await flightRepository.updateRemainingSeats(data.flightId,data.seats,data.dec);
  return flightseats;
} catch(error){
 console.log(error)
  throw new AppError('Cannot update data of mentioned seats', StatusCodes.INTERNAL_SERVER_ERROR);

}  
}



module.exports={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
};