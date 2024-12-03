const jwt = require("jsonwebtoken");
const Admin = require("../models/adminSchema");
require("dotenv").config();

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Not authorized. Token is not valid' });
    }
};

module.exports = auth;