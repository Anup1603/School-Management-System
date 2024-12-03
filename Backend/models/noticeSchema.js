const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    details: {
        type: String,
        required: [true, "Details is required"]
    },
    date: {
        type: Date,
        required: [true, "Date is importent"]
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
    }
}, { timestamps: true });

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;