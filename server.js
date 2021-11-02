const express = require("express");
const db = require("./db");
const cors = require("cors");

const accessGatesRoutes = require("./routes/accessGates");
const unitsRoutes = require("./routes/units");
const announcementsRoutes = require("./routes/announcements");
const communityAmenitiesRoutes = require("./routes/communityAmenities");
const communityEventsRoutes = require("./routes/communityEvents");
const departmentRoutes = require("./routes/department");
const technicianRoutes = require("./routes/technician");
const finesRoutes = require("./routes/fines");
const leaseTermRoutes = require("./routes/leaseTerm");
const parkingRoutes = require("./routes/parking");
const photosCategoryRoutes = require("./routes/photosCategory");
const rentHistoryRoutes = require("./routes/rentHistory");
const apartmentAmenitiesRoutes = require("./routes/apartmentAmenities");
const residentHomesRoutes = require("./routes/residentHomes");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

app.use("/", accessGatesRoutes);
app.use("/", unitsRoutes);
app.use("/", announcementsRoutes);
app.use("/", communityAmenitiesRoutes);
app.use("/", communityEventsRoutes);
app.use("/", departmentRoutes);
app.use("/", technicianRoutes);
app.use("/", finesRoutes);
app.use("/", leaseTermRoutes);
app.use("/", parkingRoutes);
app.use("/", photosCategoryRoutes);
app.use("/", rentHistoryRoutes);
app.use("/", apartmentAmenitiesRoutes);
app.use("/", residentHomesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
