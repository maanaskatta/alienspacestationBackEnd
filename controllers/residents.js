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

const getResidents = (request, response) => {
  let query = "SELECT * FROM residents;";
  executeQuery(query, response);
};

const addResident = (request, response) => {
  let { firstName, unitNumber, lastName, age, phoneNumber, emailID } =
    request.body;
  let query = `INSERT INTO residents VALUES ("${firstName}", "${unitNumber}", "${lastName}", "${age}","${phoneNumber}", "${emailID}", UUID());`;
  executeQuery(query, response);
};

const updateResident = (request, response) => {
  let {
    firstName,
    unitNumber,
    lastName,
    age,
    phoneNumber,
    emailID,
    ResidentID,
  } = request.body;
  let query = `UPDATE residents SET firstName="${firstName}", unitNumber = ${unitNumber}, lastName="${lastName}", age="${age}", phoneNumber="${phoneNumber}", emailID="${emailID}"   WHERE ResidentID="${ResidentID}";`;
  executeQuery(query, response);
};

const getHomes = (request, response) => {
  let query = `SELECT * FROM residenthome;`;
  executeQuery(query, response);
};

module.exports = {
  getResidents,
  addResident,
  updateResident,
  getHomes,
};
