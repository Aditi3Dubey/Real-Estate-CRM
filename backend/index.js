const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use("/api/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Server running on port 5000"));


// in react
// import axios from "axios";

// // Register
// const register = async (data) => {
//   await axios.post("http://localhost:5000/api/auth/register", data);
// };

// // Login
// const login = async (data) => {
//   const res = await axios.post("http://localhost:5000/api/auth/login", data);
//   localStorage.setItem("token", res.data.token);
// };

