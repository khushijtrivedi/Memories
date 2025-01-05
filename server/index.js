import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';


const app = express();

// Middleware setup
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes setup
app.use('/posts', postRoutes);

dotenv.config();
// Database connection setup
const CONNECTION_URL = process.env.MONGO_URI || 'mongodb+srv://Khushi:Khushi123@librarydb.3g6t5.mongodb.net/?retryWrites=true&w=majority&appName=LibraryDB';
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
