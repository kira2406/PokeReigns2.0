const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose")

const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const pokemonRoutes = require("./src/routes/pokemonRoutes");

const app = express();

app.use(cors({
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(bodyParser.json())

const connectToMongo = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI

    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

connectToMongo();

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/poke", pokemonRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});