import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: [`.env`, `.env.local`] });

export const connectDB = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "test",
    });
  } catch (error) {
    console.log("MongoDB bad authentication");
    process.exit(1);
  }
};
