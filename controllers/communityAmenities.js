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

const getCommunityAmenities = (request, response) => {
  let query = "SELECT * FROM communityamenities;";
  executeQuery(query, response);
};

const addCommunityAmenity = (request, response) => {
  let { AmenityName } = request.body;
  let query = `INSERT INTO communityamenities VALUES ( UUID(),"${AmenityName}");`;
  executeQuery(query, response);
};

const updateCommunityAmenity = (request, response) => {
  let { CommAmenityID, AmenityName } = request.body;
  let query = `UPDATE communityamenities SET AmenityName="${AmenityName}" WHERE CommAmenityID="${CommAmenityID}";`;
  executeQuery(query, response);
};

const deleteCommunityAmenity = (request, response) => {
  let { CommAmenityID } = request.body;
  let query = `DELETE FROM communityamenities WHERE CommAmenityID = "${CommAmenityID}"`;
  executeQuery(query, response);
};

module.exports = {
  getCommunityAmenities,
  addCommunityAmenity,
  updateCommunityAmenity,
  deleteCommunityAmenity,
};
