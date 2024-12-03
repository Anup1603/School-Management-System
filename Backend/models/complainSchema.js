const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    complaint: {
        type: String,
        required: true,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    }
}, { timestamps: true });

const Complain = mongoose.model("Complain", complainSchema);

module.exports = Complain;