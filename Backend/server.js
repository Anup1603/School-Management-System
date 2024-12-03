const express = require("express");
const cors = require("cors");
const connectDB = require("./db/dbConnect");
const adminRoute = require("./routes/adminRoute");
const teacherRoute = require("./routes/teacherRoute");
const studentRoute = require("./routes/studentRoute");
const classRoute = require("./routes/classRoute");
const complainRoute = require("./routes/complainRoute");
const noticeRoute = require("./routes/noticeRoute");
const subjectRoute = require("./routes/subjectRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Server is connected successfully...</h1>");
})

// routes
app.use("/api/admin", adminRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/student", studentRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/class", classRoute);
app.use("/api/complain", complainRoute);
app.use("/api/notice", noticeRoute);

// server start
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is connected successfully @ http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Server not started, something went wrong. Error${error.message}`);
    }
}

startServer();
