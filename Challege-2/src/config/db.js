import mongoose from "mongoose";

export async function connectDB() {
  try {
    const DBurl = process.env.MONGODB_URL;
    const conn = await mongoose.connect(DBurl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    throw new Error("DB not connected!!!");
  }
}
