import dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url'; // Add this line
import { dirname } from 'path'; // Add this line
import connectDB from "./db/dbConnect.js";
import contactRoutes from './routes/contactRoute.js'; 

const __filename = fileURLToPath(import.meta.url); // Add this line
const __dirname = dirname(__filename); // Add this line

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes first
app.use('/api', contactRoutes);

// Serve frontend build if present (note: folder is `Frontened` in repo)
const distPath = path.join(__dirname, '../../Frontened/dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get("/", (req, res) => {
  res.send("Welcome to Server!");
});

//connect to db and start server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port number ${port}`);
      console.log("MongoDB connected successfully!");
    });
  })
  .catch((error) => {
    console.error("MongoDB not connected successfully:", error.message);
  });