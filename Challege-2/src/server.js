import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

const port = process.env.PORT;

app.get("/api/books", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
