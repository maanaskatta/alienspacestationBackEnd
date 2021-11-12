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

const getWorkOrders = (request, response) => {
  let query = "SELECT * FROM workorders;";
  executeQuery(query, response);
};

const addWorkOrder = (request, response) => {
  let { issueDescription, unitNumber } = request.body;
  let query = `INSERT INTO workorders VALUES (UUID(), "${issueDescription}", "${unitNumber}", now());`;
  executeQuery(query, response);
};

const updateWorkOrder = (request, response) => {
  let { WorkOrderID, issueDescription, unitNumber } = request.body;
  let query = `UPDATE workorders SET issueDescription="${issueDescription}", unitNumber ="${unitNumber}", dateAndTime = now()  WHERE WorkOrderID ="${WorkOrderID}";`;
  executeQuery(query, response);
};

module.exports = {
  getWorkOrders,
  addWorkOrder,
  updateWorkOrder,
};
