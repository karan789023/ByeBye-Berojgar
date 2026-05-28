import dotenv from "dotenv";

import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import passport from "passport";

import "./config/passport.js";

import authRoutes from "./routes/auth.js";

import testRoutes from "./routes/testRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "keyboard",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());
app.use("/api/auth", authRoutes);
// Routes
app.use("/api/tests", testRoutes);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Server running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

