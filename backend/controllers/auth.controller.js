const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieOptions = {
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "none",
  secure: true,
};
exports.login = async (req, res, next) => {
  try {
    console.log("In login");
    console.log(req.body);
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    delete user.password;

    setCookie(res, user);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = await UserModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    delete newUser.password;

    setCookie(res, newUser);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  res.clearCookie("token", cookieOptions);

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

function setCookie(res, user) {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, cookieOptions);
}
