import mongoose from "mongoose";

export async function connectDB() {
  try {
    const DBurl = process.env.MONGODB_URL;
    mongoose.connect(DBurl);

    console.log("MongoDB Connected: 3000");
  } catch (err) {
    throw new Error("DB not connected!!!");
  }
}
