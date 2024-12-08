const express = require("express");
const { studentRegister, studentLogin, getAllStudents, getStudentDetail, studentAttendence, updateStudent, updateExamResult, deleteStudent, deleteStudentByClass, deleteAllStudents, removeStudentAttendenceBySubject, removeStudentAttendence, clearAllStudentsAttendenceBySubject, clearAllStudentsAttendence } = require("../controllers/studentController");

const studentRoute = express.Router();

studentRoute.route("/getAllStudent").get(getAllStudents);
studentRoute.route("/student/:id").get(getStudentDetail);

studentRoute.route("/register").post(studentRegister);
studentRoute.route("/login").post(studentLogin);

studentRoute.route("/studentAttendence/:id").put(studentAttendence);
studentRoute.route("/student/:id").put(updateStudent);
studentRoute.route("/updateExamResult/:id").put(updateExamResult);
studentRoute.route("/removeStudentSubAtten/:id").put(removeStudentAttendenceBySubject);
studentRoute.route("/removeStudentAttendence/:id").put(removeStudentAttendence);
studentRoute.route("/clearAllStudentSubAtten/:id").put(clearAllStudentsAttendenceBySubject);
studentRoute.route("/clearAllStudentAttendence/:id").put(clearAllStudentsAttendence);



studentRoute.route("/student/:id").delete(deleteStudent);
studentRoute.route("/studentClass/:id").delete(deleteStudentByClass);
studentRoute.route("/deleteAllStudent").delete(deleteAllStudents);




module.exports = studentRoute;