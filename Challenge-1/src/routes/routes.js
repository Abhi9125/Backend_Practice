import express from "express";
import { createNewUser, deleteUserById, getAllUser, getSingleUserById, updateUserDetails } from "../controllers/userController.js";

const userRoute = express.Router();


userRoute.get("/users", getAllUser)
userRoute.get("/users/:id", getSingleUserById);
userRoute.post("/users",createNewUser);
userRoute.put("/users/:id",updateUserDetails);
userRoute.delete("/users/:id",deleteUserById)


export default userRoute;
