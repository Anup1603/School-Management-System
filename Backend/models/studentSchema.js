const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    roll_no: {
        type: Number,
        required: [true, "Roll number is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
    role: {
        type: String,
        default: "Student",
    },
    examResult: [
        {
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject",
            },
            marksObtained: {
                type: Number,
                default: 0
            }
        }
    ],
    attendance: [
        {
            date: {
                type: Date,
                required: true,
            },
            status: {
                type: String,
                enum: ["Present", "Absent"],
                required: true
            },
            subject: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject",
                required: true
            }
        }
    ]
}, { timestamps: true })

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;