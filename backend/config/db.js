import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Simplified MongoDB connection
    await mongoose.connect('mongodb+srv://mehtavinayak2004:677204@cluster0.aqzej.mongodb.net/Food-Delivery');
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
  }
};

