const ContactusModel = require("../models/contactus.model");

exports.addContactUs = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contactus = await ContactusModel.create({ name, email, message });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    next(error);
  }
};
