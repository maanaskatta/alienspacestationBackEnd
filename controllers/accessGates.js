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

const getAccessGates = (request, response) => {
  let query = "SELECT * FROM `accessgates`;";
  executeQuery(query, response);
};

const addAccessGate = (request, response) => {
  let { gateName, accessCode } = request.body;
  let query = `INSERT INTO accessgates VALUES ( UUID(),"${gateName}",${accessCode});`;
  executeQuery(query, response);
};

const updateAccessGate = (request, response) => {
  let { gateID, gateName, accessCode } = request.body;
  let query = `UPDATE accessgates SET accessCode = ${accessCode}, gateName = "${gateName}" WHERE gateID="${gateID}";`;
  executeQuery(query, response);
};

const deleteAccessGate = (request, response) => {
  let { gateID } = request.body;
  let query = `DELETE FROM accessgates WHERE gateID = "${gateID}"`;
  executeQuery(query, response);
};

module.exports = {
  getAccessGates,
  addAccessGate,
  updateAccessGate,
  deleteAccessGate,
};
