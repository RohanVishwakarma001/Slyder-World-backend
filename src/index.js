import dotenv from "dotenv";
// require("dotenv").config();
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB();
