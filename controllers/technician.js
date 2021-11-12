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

const getTechnicians = (request, response) => {
  let query =
    "SELECT * FROM technician INNER JOIN department ON technician.departmentID=department.departmentID;";
  executeQuery(query, response);
};

const addTechnician = (request, response) => {
  let { firstName, departmentID, lastName, phoneNumber } = request.body;
  let query = `INSERT INTO technician VALUES ( UUID(),"${firstName}","${departmentID}","${lastName}","${phoneNumber}");`;
  executeQuery(query, response);
};

const updateTechnician = (request, response) => {
  let { TechnicianID, firstName, departmentID, lastName, phoneNumber } =
    request.body;
  let query = `UPDATE technician SET firstName="${firstName}", departmentID="${departmentID}", lastName="${lastName}", phoneNumber="${phoneNumber}"   WHERE TechnicianID="${TechnicianID}";`;
  executeQuery(query, response);
};

const deleteTechnician = (request, response) => {
  let { TechnicianID } = request.body;
  let query = `DELETE FROM technician WHERE TechnicianID = "${TechnicianID}"`;
  executeQuery(query, response);
};

module.exports = {
  getTechnicians,
  addTechnician,
  updateTechnician,
  deleteTechnician,
};
