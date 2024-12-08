const express = require("express");
const { createNotice, noticeList, updateNotice, deleteNotice, deleteNotices } = require("../controllers/noticeController");

const noticeRoute = express.Router();

noticeRoute.route("/create").post(createNotice);

noticeRoute.route("/noticeList/:id").get(noticeList);

noticeRoute.route("/:id").put(updateNotice);

noticeRoute.route("/:id").delete(deleteNotice);

noticeRoute.route("/notices/:id").delete(deleteNotices);

module.exports = noticeRoute;