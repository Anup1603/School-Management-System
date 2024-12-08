const express = require("express");
const { teacherRegister, teacherLogin, teacherAttendence, updateTeacherSubject, getTeacherDetail, deleteTeacher, deleteTeacherByClass, getAllTeachers, deleteAllTeachers } = require("../controllers/teacherController");

const teacherRoute = express.Router();

teacherRoute.route("/getAllTeachers").get(getAllTeachers);

teacherRoute.route("/register").post(teacherRegister);
teacherRoute.route("/login").post(teacherLogin);
teacherRoute.route("/teacherAttendence:id").post(teacherAttendence);

teacherRoute.route("/deleteAllTeacher").delete(deleteAllTeachers);

teacherRoute.route("/:id")
    .put(updateTeacherSubject)
    .get(getTeacherDetail)
    .delete(deleteTeacher)
    .delete(deleteTeacherByClass);



module.exports = teacherRoute;