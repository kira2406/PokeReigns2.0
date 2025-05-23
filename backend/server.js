const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(cors({
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(bodyParser.json())

app.use("/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});