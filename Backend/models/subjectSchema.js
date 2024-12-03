const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subject name is required"]
    },
    code: {
        type: String,
        required: [true, "Subject code is required"]
    },
    session: {
        type: String,
        required: true,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
}, { timestamps: true });

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;