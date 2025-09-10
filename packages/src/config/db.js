import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: [`.env`, `.env.local`] });

export const connectDB = async () => {
  try {
    console.log(process.env);
    await mongoose.connect(
      "mongodb+srv://cacangus_db_user:MdrEVNBAbbbuest0@cluster0.l127akw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("mongoose connected");
  } catch (error) {
    console.log("MongoDB bad authentication");
    process.exit(1);
  }
};
