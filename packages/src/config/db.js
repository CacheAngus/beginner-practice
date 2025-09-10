import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: [`.env`, `.env.local`] });

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoose connected");
  } catch (error) {
    console.log("MongoDB bad authentication");
    process.exit(1);
  }
};
