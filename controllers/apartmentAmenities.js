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

const getApartmentAmenities = (request, response) => {
  let query = "SELECT * FROM apartmentamenities;";
  executeQuery(query, response);
};

const addApartmentAmenity = (request, response) => {
  let { AmenityName, description, UnitID } = request.body;
  let query = `INSERT INTO apartmentamenities VALUES ( UUID(),"${AmenityName}","${UnitID}","${description}");`;
  executeQuery(query, response);
};

const updateApartmentAmenity = (request, response) => {
  let { AprtAmenityID, AmenityName, description, UnitID } = request.body;
  let query = `UPDATE apartmentamenities SET AmenityName="${AmenityName}", UnitID="${UnitID}", description = "${description}" WHERE AprtAmenityID="${AprtAmenityID}";`;
  executeQuery(query, response);
};

const deleteApartmentAmenity = (request, response) => {
  let { AprtAmenityID } = request.body;
  let query = `DELETE FROM apartmentamenities WHERE AprtAmenityID = "${AprtAmenityID}"`;
  executeQuery(query, response);
};

module.exports = {
  getApartmentAmenities,
  addApartmentAmenity,
  updateApartmentAmenity,
  deleteApartmentAmenity,
};
