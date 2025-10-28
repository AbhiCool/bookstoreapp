const UserModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await UserModel.findById(decoded.id);

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = isAuthenticated;
