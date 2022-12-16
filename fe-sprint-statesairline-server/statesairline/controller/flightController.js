const flights = require('../repository/flightList');
const fs = require('fs');

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:
    // if (Object.keys(req.query).length === 0) {
    //   return res.json(flights)
    // } else if (departure_times !== undefined && arrival_times !== undefined) {
    //   const data = flights.filter((flight) => {
    //     return flight.departure_times === departure_times && flight.arrival_times === arrival_times
    //   })
    //   return res.json(data)
    // } else if (destination && departure) {
    //   const data = flights.filter((flight) => {
    //     return flight.destination === destination && flight.departure === departure
    //   })
    //   return res.json(data)
    // }
    if(!req.query) return res.json(flights);
    else{
      const filteredFlight = flights.filter(flight => {
        let condition = true;
        if(departure_times) condition = condition && flight.departure_times === departure_times;
        if(arrival_times) condition = condition && flight.arrival_times === arrival_times;
        if(departure) condition = condition && flight.departure === departure;
        if(destination) condition = condition && flight.destination === destination;
  
        return condition;
      })
      return res.json(filteredFlight);
    }
  },
  // [GET] /flight/:uuid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:
    const data = flights.filter((flight) => {
      return flight.uuid === uuid
    })
    return res.json(data)
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    // TODO:
    const beUpdatedIdx = flights.findIndex((flight) => {
      return flight.uuid === uuid
    })
    const updateFlight = { ...flights[beUpdatedIdx], ...bodyData }
    flights.splice(beUpdatedIdx, 1, updateFlight)
    return res.json(updateFlight)
  }
};

