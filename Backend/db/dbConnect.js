const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB is connected successfully from ${conn.connection.host}`);
    } catch (err) {
        console.log(`DB nit connected - Error:${err.message}`);
        process.exit();
    }
}

module.exports = connectDB;