const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

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

const User = require("./models/user");
const Order = require("./models/order");

//function to send verification email to the user

const sendVerificationemail = async (email, verificationToken) => {
  //create a nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "18ec.shivangthacker@gmail.com",
      pass: "pedawnfwjkgphsff",
    },
  });

  //compose the email message

  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify youe email : http://192.168.0.101:8000/verify/${verificationToken}`,
  };

  //send the email

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("error sending verification email", err);
  }
};

//endpoint to register in the app

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if email is already register

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(400).json({ message: "Email alreadt registered" });
    }

    //create a new user

    const newUser = new User({ name, email, password });

    //generate and store the varification token, crypto used to create random string

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    //save to the database

    await newUser.save();

    //send verification email to user

    sendVerificationemail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

//endpoint to verify the email

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    //find the user with the given verification token

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    //marked the user as verified

    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "Email Verification Failed" });
  }
});

//endpoint to login the user!

const generatesecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generatesecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //check if password is right or not
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //generate a token

    const token = jwt.sign({ userId: user._id }, secretKey);

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
});

//endpoint to store a new address to the backend

app.post("/addresses", async (req, res) => {
  try {
    const { userId, address } = req.body;
    //find the user by UserId

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //add the new address to the user's addresses array

    user.addresses.push(address);

    //save the updated user in the backend

    await user.save();

    res.status(200).json({ message: "address created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding address" });
  }
});

//endpoint to get all the addresses of the perticular user

app.get("/addresses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: "error retrieveing the addresses" });
  }
});
