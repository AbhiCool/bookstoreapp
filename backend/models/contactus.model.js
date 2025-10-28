const mongoose = require("mongoose");

const contacusSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactusModel = mongoose.model("Contactus", contacusSchema);
module.exports = ContactusModel;
