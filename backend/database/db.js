import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "sunil",
    });

    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting database", error.message);
  }
};