// entry file
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 5000;

// for parsing body of request
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on port 5000");
  connectDB();
});

// hH5hrFc1Y2lVGBv0

// admin/ admin1234
