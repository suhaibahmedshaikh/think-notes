import mongoose from "mongoose";
import { MONGO_URI } from "./envConfig.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `MONGODB successfully connected on ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error("Error while connecting to MONGODB ", error);
    process.exit(1);
  }
};
