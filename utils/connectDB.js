import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;

    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
}

export default connectDB;
