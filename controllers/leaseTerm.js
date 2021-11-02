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

const getLeaseTerms = (request, response) => {
  let query = "SELECT * FROM leaseterm;";
  executeQuery(query, response);
};

const addLeaseTerm = (request, response) => {
  let { ResidentID, term } = request.body;
  let query = `INSERT INTO leaseterm VALUES ( "${term}", ${ResidentID}, UUID());`;
  executeQuery(query, response);
};

const updateLeaseTerm = (request, response) => {
  let { ResidentID, term, leaseID } = request.body;
  let query = `UPDATE leaseterm SET term="${term}", ResidentID="${ResidentID}" WHERE leaseID="${leaseID}";`;
  executeQuery(query, response);
};

const deleteLeaseTerm = (request, response) => {
  let { leaseID } = request.body;
  let query = `DELETE FROM leaseterm WHERE leaseID = "${leaseID}"`;
  executeQuery(query, response);
};

module.exports = {
  getLeaseTerms,
  addLeaseTerm,
  updateLeaseTerm,
  deleteLeaseTerm,
};
