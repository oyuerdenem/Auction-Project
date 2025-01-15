// MONGODB password => CUXqH1o2669U6W53
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
console.log(process.env.MONGO_URI);
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
