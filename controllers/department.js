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

const getDepartments = (request, response) => {
  let query = "SELECT * FROM department;";
  executeQuery(query, response);
};

const addDepartment = (request, response) => {
  let { departmentName } = request.body;
  let query = `INSERT INTO department VALUES ( UUID(),"${departmentName}");`;
  executeQuery(query, response);
};

const updateDepartment = (request, response) => {
  let { departmentID, departmentName } = request.body;
  let query = `UPDATE department SET departmentName="${departmentName}" WHERE departmentID="${departmentID}";`;
  executeQuery(query, response);
};

const deleteDepartment = (request, response) => {
  let { departmentID } = request.body;
  let query = `DELETE FROM department WHERE departmentID = "${departmentID}"`;
  executeQuery(query, response);
};

module.exports = {
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
