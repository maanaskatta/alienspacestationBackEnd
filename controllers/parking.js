const db = require("../db");

const executeQuery = (query, response) => {
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      response.send({
        statusCode: 404,
      });
    }
    response.send(result);
  });
};

const getParkings = (request, response) => {
  let query = "SELECT * FROM parking;";
  executeQuery(query, response);
};

const addParking = (request, response) => {
  let { parkingClass, parkingTagNumber, ResidentID } = request.body;
  let query = `INSERT INTO parking VALUES ( "${parkingClass}", "${parkingTagNumber}", "${ResidentID}",UUID());`;
  executeQuery(query, response);
};

const updateParking = (request, response) => {
  let { ParkingLotID, parkingClass, parkingTagNumber, ResidentID } =
    request.body;
  let query = `UPDATE parking SET parkingClass="${parkingClass}", parkingTagNumber="${parkingTagNumber}", ResidentID="${ResidentID}"  WHERE ParkingLotID="${ParkingLotID}";`;
  executeQuery(query, response);
};

const deleteParking = (request, response) => {
  let { ParkingLotID } = request.body;
  let query = `DELETE FROM parking WHERE ParkingLotID = "${ParkingLotID}"`;
  executeQuery(query, response);
};

module.exports = {
  getParkings,
  addParking,
  updateParking,
  deleteParking,
};
