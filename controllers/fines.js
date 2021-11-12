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

const getFines = (request, response) => {
  let query = "SELECT * FROM fines;";
  executeQuery(query, response);
};

const addFine = (request, response) => {
  let { unitNumber, description, amount } = request.body;
  let query = `INSERT INTO fines VALUES ( "${unitNumber}","${description}","${amount}", UUID());`;
  executeQuery(query, response);
};

const updateFine = (request, response) => {
  let { FineID, unitNumber, description, amount } = request.body;
  let query = `UPDATE fines SET unitNumber="${unitNumber}", description="${description}", amount="${amount}" WHERE FineID="${FineID}";`;
  executeQuery(query, response);
};

const deleteFine = (request, response) => {
  let { FineID } = request.body;
  let query = `DELETE FROM fines WHERE FineID = "${FineID}"`;
  executeQuery(query, response);
};

module.exports = {
  getFines,
  addFine,
  updateFine,
  deleteFine,
};
