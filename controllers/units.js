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

const getUnits = (request, response) => {
  let query = "SELECT * FROM units;";
  executeQuery(query, response);
};

const addUnit = (request, response) => {
  let { noOfBedRooms, noOfBathRooms, area, rent } = request.body;
  let query = `INSERT INTO units VALUES ( UUID(),${noOfBedRooms},${noOfBathRooms}, ${area} ,${rent});`;
  executeQuery(query, response);
};

const updateUnit = (request, response) => {
  let { UnitID, noOfBedRooms, noOfBathRooms, area, rent } = request.body;
  let query = `UPDATE units SET noOfBedRooms=${noOfBedRooms}, noOfBathRooms = ${noOfBathRooms}, area = ${area}, rent=${rent} WHERE UnitID="${UnitID}";`;
  executeQuery(query, response);
};

const deleteUnit = (request, response) => {
  let { UnitID } = request.body;
  let query = `DELETE FROM units WHERE UnitID = "${UnitID}"`;
  executeQuery(query, response);
};

module.exports = {
  getUnits,
  addUnit,
  updateUnit,
  deleteUnit,
};
