import express from "express";
import userRoute from "./routes/routes.js";


const app = express();

app.use(express.json());


app.use("/api", userRoute);

app.listen(3000, () => {
    console.log("Server is running")
})


