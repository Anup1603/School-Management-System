const express = require("express");
const { createSubject, allSubjects, classSubjects, freeSubjectList, getSubjectDetail, deleteSubject, deleteSubjects, deleteSubjectsByClass } = require("../controllers/subjectController");

const subjectRoute = express.Router();

subjectRoute.route("/create").post(createSubject);

subjectRoute.route("/allSubject/:id").get(allSubjects);
subjectRoute.route("/classSubject/:id").get(classSubjects);
subjectRoute.route("/freeSubjectList/:id").get(freeSubjectList);
subjectRoute.route("/:id").get(getSubjectDetail);

subjectRoute.route("/:id").delete(deleteSubject);
subjectRoute.route("/subjects/:id").delete(deleteSubjects);
subjectRoute.route("/class/:id").delete(deleteSubjectsByClass);

module.exports = subjectRoute;