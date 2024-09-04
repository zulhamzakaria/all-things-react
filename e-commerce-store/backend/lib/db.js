import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongo connected: ${conn.connection.host} `);
  } catch (err) {
    console.log("error connecting to db", err.message);
    process.exit(1);
  }
};
