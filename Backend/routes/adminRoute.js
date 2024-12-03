const express = require("express");
const { adminRegister, adminLogin, getAdminDetail, getAllAdmin, deleteAdmin, updateAdmin } = require("../controllers/adminController");
const adminRoute = express.Router();


adminRoute.route("/allAdmin").get(getAllAdmin);

adminRoute.route("/register").post(adminRegister);
adminRoute.route("/login").post(adminLogin);

adminRoute.route("/:id")
    .get(getAdminDetail)
    .put(updateAdmin)
    .delete(deleteAdmin)


module.exports = adminRoute;