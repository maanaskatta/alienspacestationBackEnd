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

const getCommunityEvents = (request, response) => {
  let query = "SELECT * FROM communityevents;";
  executeQuery(query, response);
};

const addCommunityEvent = (request, response) => {
  let { eventName, description, venue, dateAndTime } = request.body;
  let query = `INSERT INTO communityevents VALUES ( UUID(),"${eventName}","${description}", "${venue}", "${dateAndTime}");`;
  executeQuery(query, response);
};

const updateCommunityEvent = (request, response) => {
  let { EventID, eventName, description, venue, dateAndTime } = request.body;
  let query = `UPDATE communityevents SET eventName="${eventName}", description = "${description}", venue = "${venue}", dateAndTime = "${dateAndTime}" WHERE EventID="${EventID}";`;
  executeQuery(query, response);
};

const deleteCommunityEvent = (request, response) => {
  let { EventID } = request.body;
  let query = `DELETE FROM communityevents WHERE EventID = "${EventID}"`;
  executeQuery(query, response);
};

module.exports = {
  getCommunityEvents,
  addCommunityEvent,
  updateCommunityEvent,
  deleteCommunityEvent,
};
