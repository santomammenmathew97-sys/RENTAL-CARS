import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./ViewCars.css";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const res = await axios.get("http://localhost:8001/api/vehicles");
    setCars(res.data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    await axios.delete(`http://localhost:8001/api/vehicles/${id}`);
    fetchCars(); 
  };

  return (
    <div className="table-container">
      <h2>Vehicle List</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Car Name</th>
            <th>Rent / Day</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car, i) => (
            <tr key={car._id}>
              <td>{i + 1}</td>
              <td>{car.name}</td>
              <td>₹{car.rentPerDay}</td>
              <td>
                <img
                  src={`http://localhost:8001/uploads/${car.image}`}
                  alt={car.name}
                  className="car-img"
                />
              </td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => deleteCar(car._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCars;
