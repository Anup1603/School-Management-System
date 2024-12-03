const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    class: {
        type: String,
        required: [true, "Class is required"]
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
}, { timestamps: true })

const Class = mongoose.model("Class", classSchema);

module.exports = Class;