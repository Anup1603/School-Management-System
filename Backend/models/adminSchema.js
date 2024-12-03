const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
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
    role: {
        type: String,
        default: "Admin"
    },
    schoolName: {
        type: String,
        required: [true, "School name is required"],
        unique: true
    }
}, { timestamps: true });


// hashing password
adminSchema.pre("save", async (next) => {
    if (!this.isModified('password'))
        return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


// compare password - decrypt password
adminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;