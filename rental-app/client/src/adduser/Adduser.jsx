import React, { useState } from "react";
import "./Adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    image: null, 
  });

  const navigate = useNavigate();

  
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  
  const imageHandler = (e) => {
    const file = e.target.files[0];
    setUser((prevUser) => ({ ...prevUser, image: file })); 
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(); 
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("address", user.address);
    formData.append("image", user.image);  

    try {
        await axios.post("http://localhost:8001/api/user", formData, {
            headers: { "Content-Type": "multipart/form-data" } 
        });
        navigate("/");
        console.log("User added successfully");
    } catch (error) {
        console.error("Axios Error:", error);
    }
};
  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-primary">
        Back
      </Link>
      <h3>Add new user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label>
          <input type="text" name="name" autoComplete="off" onChange={inputHandler} placeholder="Enter your name" />
        </div>
        <div className="inputGroup">
          <label>Email:</label>
          <input type="text" name="email" autoComplete="off" onChange={inputHandler} placeholder="Enter your email" />
        </div>
        <div className="inputGroup">
          <label>Address:</label>
          <input type="text" name="address" autoComplete="off" onChange={inputHandler} placeholder="Enter your address" />
        </div>
        <div className="inputGroup">
          <label>Upload photo:</label>
          <input type="file" name="image" autoComplete="off" onChange={imageHandler} />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
