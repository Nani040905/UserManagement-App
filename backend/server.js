import express from 'express'
import { UserApp } from './APIs/UserAPI.js'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

// Load environment variables
config();

const app = express()

// Dynamic CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`CORS blocked for origin: ${origin}`);
      return callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true
}))

// Body parser middleware
app.use(express.json())

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Backend is running smoothly' });
});

// API routes
app.use("/user-api", UserApp)

// Database connection and server startup
async function startServer() {
    try {
        const mongoUri = process.env.MONGODB_URL;
        if (!mongoUri) {
            throw new Error("MONGODB_URL is not defined in environment variables");
        }
        
        await connect(mongoUri)
        console.log("✅ Connected to MongoDB")
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.error("❌ DataBase Connection Failed:", err.message)
        process.exit(1); // Exit process on fatal error
    }
}

startServer()

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});