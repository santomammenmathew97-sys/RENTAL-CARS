import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      await axios.delete(`http://localhost:8001/api/bookings/${id}`);
      fetchBookings(); 
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert("Delete failed");
    }
  };

  return (
    <div className="admin-bookings">
      <h2>Bookings</h2>

      <div className="booking-table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Car</th>
              <th>Price / Day</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, index) => (
              <tr key={b._id}>
                <td>{index + 1}</td>
                <td>{b.userName}</td>
                <td>{b.userEmail}</td>
                <td>{b.vehicleName}</td>
                <td>₹{b.pricePerDay}</td>
                <td>
                  <FaTrash
                    className="delete-icon"
                    onClick={() => deleteBooking(b._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
