const mongoose = require("mongoose");

const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to mongo db");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
