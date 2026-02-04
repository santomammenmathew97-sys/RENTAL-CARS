import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddCar.css";

function AddCar() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [car, setCar] = useState({
    name: "",
    category: "",
    rentPerDay: "",
    image: null,
  });

  const inputHandler = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setCar({ ...car, image: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", car.name);
    formData.append("category", car.category);
    formData.append("rentPerDay", car.rentPerDay);
    formData.append("image", car.image);

    await axios.post("http://localhost:8001/api/vehicles", formData);

    alert("Car added successfully 🚗");
    navigate("/admin/view-cars");
  };

  return (
    <div className="add-car-page">
      <form className="add-car-form" onSubmit={submitForm}>
        <h2>Add New Vehicle</h2>

        <input name="name" placeholder="Car Name" required onChange={inputHandler} />

        <select name="category" required onChange={inputHandler}>
          <option value="">Select Category</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>

        <input
          name="rentPerDay"
          type="number"
          placeholder="Rent per day"
          required
          onChange={inputHandler}
        />

        <input type="file" accept="image/*" ref={fileRef} required onChange={imageHandler} />

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
