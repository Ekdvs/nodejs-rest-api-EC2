import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};