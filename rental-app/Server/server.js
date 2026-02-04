import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoute.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ serve uploaded images
app.use("/uploads", express.static("uploads"));

// DB
connectDB();

// routes
app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);

// start server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
