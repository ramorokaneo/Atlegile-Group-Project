//COPY AND PASTE = npm install nodemon dotenv express cors morgan mongoose https jsonwebtoken

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const https = require("https");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

mongoose.connect("mongodb://127.0.0.1:27017/AMS"); //Replace ****** with db name

//Routes for user authentication and authorization using JWT tokens

app.get("/", function (req, res) {
  res.send("Nodejs Express Server running...");
});

app.listen(8080, function () {
  console.log(
    "server started...\nClick the url to gain access: http://localhost:8080/"
  );
});
