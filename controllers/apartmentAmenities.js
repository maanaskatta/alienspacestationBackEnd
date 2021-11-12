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

const UnitID = "2ed3fc12-40ef-11ec-a835-70b5e89a928c";

const getApartmentAmenities = (request, response) => {
  let query = "SELECT * FROM apartmentamenities;";
  executeQuery(query, response);
};

const addApartmentAmenity = (request, response) => {
  let { AmenityName } = request.body;
  let query = `INSERT INTO apartmentamenities VALUES ( UUID(),"${AmenityName}","${UnitID}");`;
  executeQuery(query, response);
};

const updateApartmentAmenity = (request, response) => {
  let { AprtAmenityID, AmenityName } = request.body;
  let query = `UPDATE apartmentamenities SET AmenityName="${AmenityName}", UnitID="${UnitID}" WHERE AprtAmenityID="${AprtAmenityID}";`;
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
