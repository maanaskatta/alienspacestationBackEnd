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

const getRentHistories = (request, response) => {
  let query = "SELECT * FROM`rent history`";
  executeQuery(query, response);
};

module.exports = {
  getRentHistories,
};
