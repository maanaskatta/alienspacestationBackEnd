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
  let { parkingClass, isHandicapped, parkingTagNumber, ResidentID } =
    request.body;
  let query = `INSERT INTO parking VALUES ( "${parkingClass}",${isHandicapped}, "${parkingTagNumber}", "${ResidentID}",UUID());`;
  executeQuery(query, response);
};

const updateParking = (request, response) => {
  let {
    ParkingLotID,
    parkingClass,
    isHandicapped,
    parkingTagNumber,
    ResidentID,
  } = request.body;
  let query = `UPDATE parking SET parkingClass="${parkingClass}", isHandicapped = ${isHandicapped}, parkingTagNumber="${parkingTagNumber}", parkingTagNumber="${ResidentID}"  WHERE ParkingLotID="${ParkingLotID}";`;
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
