import express from "express";
import authRoutes from "./routes/auth.routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware";
import passport from "passport";

// PASSPORT CONFIG
import "../src/config/passport.config";

// CONFIGURATION
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(passport.initialize());

// ROUTES
app.use("/api/v1/auth", authRoutes);

// ERROR HANDLER
app.use(errorHandler);

// SERVER RUNNING
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server listening to the port ${port}`);
});
