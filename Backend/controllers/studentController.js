const Student = require("../models/studentSchema");
const Class = require("../models/classSchema");
const Subject = require("../models/subjectSchema");
const bcrypt = require("bcryptjs");


const studentRegister = (req, res) => {

}

const studentLogin = (req, res) => {

}

const getAllStudents = (req, res) => {

}

const getStudentDetail = (req, res) => {

}

const deleteAllStudents = (req, res) => {

}

const deleteStudent = (req, res) => {

}

const updateStudent = (req, res) => {

}

const studentAttendence = (req, res) => {

}

const deleteStudentByClass = (req, res) => {

}

const updateExamResult = (req, res) => {

}

const clearAllStudentsAttendenceBySubject = (req, res) => {

}

const clearAllStudentsAttendence = (req, res) => {

}

const removeStudentAttendenceBySubject = (req, res) => {

}

const removeStudentAttendence = (req, res) => {

}


module.exports = { studentRegister, studentLogin, studentAttendence, getStudentDetail, getAllStudents, clearAllStudentsAttendence, clearAllStudentsAttendenceBySubject, removeStudentAttendence, removeStudentAttendenceBySubject, deleteAllStudents, deleteStudent, deleteStudentByClass, updateExamResult, updateStudent }
