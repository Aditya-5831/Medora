import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import passport from "passport";
import { errorHandler } from "./middlewares/error.middleware";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

// PASSPORT CONFIG
import "../src/config/passport.config";

// CONFIGURATION
const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
  })
);

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

// ERROR HANDLER
app.use(errorHandler);

// SERVER RUNNING
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server listening to the port ${port}`);
});
