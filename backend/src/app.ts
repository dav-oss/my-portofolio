import express from "express";
import { json } from "body-parser";
import adminRoutes from "./routes/adminRoutes";
import  blogRoutes  from "./routes/blogRoutes";
import  certificateRoutes from "./routes/certificateRoutes";
import  skillRoutes from "./routes/skillRoutes";
import { connectDB } from "./utils/db";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());

// Database connection
connectDB();

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/skills", skillRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});