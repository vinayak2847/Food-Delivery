import mongoose from "mongoose";

 export const connectDB=async() => {
    await mongoose.connect('mongodb+srv://mehtavinayak2004:677204@cluster0.aqzej.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}