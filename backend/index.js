const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const connectDb = require("./config/db");

const authRoutes = require("./routes/auth.route");
const bookRoutes = require("./routes/book.route");
const contactusRoutes = require("./routes/contactus.route");
const app = express();

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://bookstoreapp-lake.vercel.app"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/contactus", contactusRoutes);

app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
