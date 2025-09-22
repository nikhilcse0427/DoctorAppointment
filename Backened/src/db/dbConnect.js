import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default connectDB;