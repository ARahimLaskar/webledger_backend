const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
// const fetch = require("node-fetch");
const axios = require("axios");

const { connection } = require("./ConfigDataBase/db.js");
const userRoutes = require("./Routes/userRoutes.js");
const findFoodRoute = require("./Routes/findFoodRoute.js");
// const recipeRoute = require("./Routes/recipeRoute.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/search", findFoodRoute);
app.use("/user", userRoutes);

const PORT = 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log("error connecting db " + error);
  }
  console.log("server running at port " + PORT);
});
