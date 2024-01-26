const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://18ecshivangthacker:qweQWE123%21%40%23@cluster0.nmbe1jx.mongodb.net/",
    { useNewUrlParser: true, useUnifiedtopology: true }
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("Error connected to mongoDB", err);
  });

app.listen(port, () => {
  console.log("server is running in the code 800");
});

//endpoint to register in the app

app.post("/register", async (req, res) => {
  try {
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});
