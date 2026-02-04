import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },

    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
    vehicleName: { type: String, required: true },
    vehicleImage: { type: String },

    pricePerDay: { type: Number, required: true },

    status: { type: String, default: "Pending" }, // Pending | Confirmed | Rejected
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
