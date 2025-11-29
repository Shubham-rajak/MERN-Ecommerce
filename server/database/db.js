import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mern_ecommerce_store";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${MONGO_URI}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

export default mongoose;
