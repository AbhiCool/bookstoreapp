const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const express = require("express");
const connectDb = require("./config/db");

const authRoutes = require("./routes/auth.route");
const bookRoutes = require("./routes/book.route");
const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
