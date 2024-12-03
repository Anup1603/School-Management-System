const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const Admin = require("../models/adminSchema");
const Teacher = require("../models/teacherSchema");
const Student = require("../models/studentSchema");
const Class = require("../models/classSchema");
const Subject = require("../models/subjectSchema");
const Notice = require("../models/noticeSchema");
const Complain = require("../models/complainSchema");

const getAllAdmin = async (req, res) => {

};

const adminRegister = async (req, res) => {

};

const adminLogin = async (req, res) => {

};


const getAdminDetail = async (req, res) => {

};

const updateAdmin = async (req, res) => {

}

const deleteAdmin = async (req, res) => {

};


module.exports = { adminLogin, adminRegister, getAdminDetail, getAllAdmin, updateAdmin, deleteAdmin };