const express = require("express");
const { createComplain, complainList } = require("../controllers/complainController");

const complainRoute = express.Router();

complainRoute.route("/create").post(createComplain);

complainRoute.route("/complainList/:id").get(complainList);

module.exports = complainRoute;