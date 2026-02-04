import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Booking.css";

function Booking() {
  const { state: car } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!car) return <h2>No car selected</h2>;

  // ✅ FIX IMAGE SOURCE (static + DB cars)
  const imageUrl =
    car.image?.startsWith("http") || car.image?.startsWith("/image")
      ? car.image
      : `http://localhost:8001/uploads/${car.image}`;

  // ✅ FIX PRICE
  const price = car.price || car.rentPerDay;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8001/api/bookings", {
        userName: name,
        userEmail: email,
        vehicleName: car.name,
        vehicleCategory: car.category,
        vehicleImage: car.image,
        pricePerDay: price,
      });

      alert("✅ Booking Successful!");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed");
    }
  };

  return (
    <div className="booking-page">
      <div className="car-details">
        <h2>{car.name}</h2>

        {/* ✅ IMAGE FIXED */}
        <img src={imageUrl} alt={car.name} />

        {/* ✅ CATEGORY */}
        {car.category && (
          <span className="category-badge">{car.category}</span>
        )}

        <h3>₹{price} / day</h3>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Driver Details</h3>

        <input
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
