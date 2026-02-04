import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Fleet.css";

const vehicles = [
  { id: 1, name: "BENZ", price: 2500, category: "Luxury", image: "/image/creta.jpg" },
  { id: 2, name: "BMW", price: 22500, category: "Sedan", image: "/image/bmw.jpg" },
  { id: 3, name: "Lamborghini", price: 27500, category: "Luxury", image: "/image/lambo.jpg" },
  { id: 4, name: "McLaren", price: 20000, category: "Luxury", image: "/image/mclaren.jpg" },
  { id: 5, name: "BENZ SUV", price: 30000, category: "SUV", image: "/image/benzsuv.jpg" },
  { id: 6, name: "Discovery", price: 30000, category: "SUV", image: "/image/DISCOVERY.jpg" },
  { id: 7, name: "Audi", price: 30000, category: "Luxury", image: "/image/aud.jpg" },
  { id: 8, name: "Wagonar", price: 1200, category: "Hatchback", image: "/image/WAGONAR.jpg" },
  { id: 9, name: "Toyota", price: 1500, category: "Hatchback", image: "/image/TOYOT1.jpg" },
  { id: 10, name: "Jeep", price: 30000, category: "SUV", image: "/image/JEEP.jpg" },
];

function Fleet() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFE FALLBACK (THIS FIXES WHITE SCREEN)
  const selectedCategory = location.state?.category ?? "All";

  const [dbCars, setDbCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/vehicles")
      .then((res) => setDbCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ FILTER STATIC CARS
  const filteredStaticCars =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter(
          (v) => v.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // ✅ FILTER DB CARS
  const filteredDbCars =
    selectedCategory === "All"
      ? dbCars
      : dbCars.filter(
          (v) =>
            v.category &&
            v.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleBook = (vehicle) => {
    navigate("/booking", {
      state: {
        _id: vehicle._id || null,
        name: vehicle.name,
        category: vehicle.category,
        price: vehicle.price || vehicle.rentPerDay,
        image: vehicle.image?.startsWith("/image")
          ? vehicle.image
          : `http://localhost:8001/uploads/${vehicle.image}`,
      },
    });
  };

  return (
    <div className="fleet">
      <h2>{selectedCategory} Cars</h2>

      {filteredStaticCars.map((v) => (
        <div className="vehicle-card" key={v.id}>
          <img src={v.image} alt={v.name} />
          <h3>{v.name}</h3>
          <span className="category-badge">{v.category}</span>
          <p>₹{v.price} / day</p>
          <button onClick={() => handleBook(v)}>Book Now</button>
        </div>
      ))}

      {filteredDbCars.map((v) => (
        <div className="vehicle-card" key={v._id}>
          <img
            src={`http://localhost:8001/uploads/${v.image}`}
            alt={v.name}
          />
          <h3>{v.name}</h3>
          <span className="category-badge">{v.category}</span>
          <p>₹{v.rentPerDay} / day</p>
          <button onClick={() => handleBook(v)}>Book Now</button>
        </div>
      ))}

      {filteredStaticCars.length === 0 && filteredDbCars.length === 0 && (
        <p style={{ marginTop: "20px" }}>No cars found</p>
      )}
    </div>
  );
}

export default Fleet;
