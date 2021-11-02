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

const getAnnouncements = (request, response) => {
  let query = "SELECT * FROM announcements;";
  executeQuery(query, response);
};

const addAnnouncement = (request, response) => {
  let { title, description } = request.body;
  let query = `INSERT INTO announcements VALUES ( UUID(),"${title}","${description}", CURRENT_TIMESTAMP());`;
  executeQuery(query, response);
};

const updateAnnouncement = (request, response) => {
  let { AnnouncementID, title, description } = request.body;
  let query = `UPDATE announcements SET title="${title}", description = "${description}", dateAndTime=CURRENT_TIMESTAMP() WHERE AnnouncementID="${AnnouncementID}";`;
  executeQuery(query, response);
};

const deleteAnnouncement = (request, response) => {
  let { AnnouncementID } = request.body;
  let query = `DELETE FROM announcements WHERE AnnouncementID = "${AnnouncementID}"`;
  executeQuery(query, response);
};

module.exports = {
  getAnnouncements,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
