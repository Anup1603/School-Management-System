const express = require("express");
const { createClass, classList, getClassDetail, getClassStudents, deleteClass, deleteClasses } = require("../controllers/classController");

const classRoute = express.Router();

classRoute.route("/create").post(createClass);

classRoute.route("/classList/:id").get(classList);
classRoute.route("/class/:id").get(getClassDetail);
classRoute.route("/class/students/:id").get(getClassStudents);

classRoute.route("/class/:id").delete(deleteClass);
classRoute.route("/classes/:id").delete(deleteClasses);

module.exports = classRoute;