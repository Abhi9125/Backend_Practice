import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

const port = process.env.PORT;

app.use("/api/books", routes);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
