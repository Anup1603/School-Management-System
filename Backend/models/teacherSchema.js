const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Teacher name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "Teacher",
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },

}, { timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;