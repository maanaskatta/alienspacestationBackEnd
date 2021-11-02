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

const getPhotoCategories = (request, response) => {
  let query = "SELECT * FROM photoscategory;";
  executeQuery(query, response);
};

const addPhotoCategory = (request, response) => {
  let { CategoryName } = request.body;
  let query = `INSERT INTO photoscategory VALUES ( UUID(),"${CategoryName}");`;
  executeQuery(query, response);
};

const updatePhotoCategory = (request, response) => {
  let { CategoryName, categoryID } = request.body;
  let query = `UPDATE photoscategory SET CategoryName="${CategoryName}" WHERE categoryID="${categoryID}";`;
  executeQuery(query, response);
};

const deletePhotoCategory = (request, response) => {
  let { categoryID } = request.body;
  let query = `DELETE FROM photoscategory WHERE categoryID = "${categoryID}"`;
  executeQuery(query, response);
};

module.exports = {
  getPhotoCategories,
  addPhotoCategory,
  updatePhotoCategory,
  deletePhotoCategory,
};
