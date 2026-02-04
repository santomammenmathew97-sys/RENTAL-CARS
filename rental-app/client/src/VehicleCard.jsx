import axios from "axios";

function VehicleCard({ vehicle }) {

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:8001/api/bookings", {
        vehicleId: vehicle._id,
        customerName: "Demo User",
        fromDate: new Date(),
        toDate: new Date()
      });

      alert("✅ Booking successful!");
    } catch (error) {
      console.error(error);
      alert("❌ Booking failed");
    }
  };

  return (
    <div className="card slide-up">
      <h3>{vehicle.name}</h3>
      <p>{vehicle.price}</p>
      <button onClick={handleBooking}>Rent Now</button>
    </div>
  );
}

export default VehicleCard;
