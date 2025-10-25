const dotenv = require("dotenv");
dotenv.config();

const express = require("expresss");

const app = express();

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
