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

const getResidentHomes = (request, response) => {
  let query = "SELECT * FROM residenthome;";
  executeQuery(query, response);
};

const addResidentHome = (request, response) => {
  let { unitNumber, UnitID } = request.body;
  let query = `INSERT INTO residenthome VALUES ("${unitNumber}", "${UnitID}");`;
  executeQuery(query, response);
};

const deleteResidentHome = (request, response) => {
  let { unitNumber } = request.body;
  let query = `DELETE FROM residenthome WHERE unitNumber = "${unitNumber}"`;
  executeQuery(query, response);
};

module.exports = {
  getResidentHomes,
  addResidentHome,
  deleteResidentHome,
};
