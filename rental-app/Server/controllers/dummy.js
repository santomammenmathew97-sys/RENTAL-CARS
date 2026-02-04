import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UpdateUser = () => {
 const users = {
  name: "",
  email: "",
  address: "",
 };
 const [user, setUser] = useState(users); // initially sets to empty value
 const navigate = useNavigate();
 const { id } = useParams();
 const inputHandler = (e) => {
  const { name, value } = e.target;
  console.log(name, value);
  setUser({ ...user, [name]: value });  // when id changes the values will be updated 
 };
useEffect(() => {
        axios
         .get(`http://localhost:8000/api/user/${id}`) // fetches the value from the database
         .then((response) => {
          setUser(response.data);
         })
         .catch((error) => {
          console.log(error);
         });
       }, [id]);  // As soon as , it gets id , values will be fetched from the DB, that values are dynamically tracked
       const submitForm = async (e) => {
        e.preventDefault();
        await axios
         .put(`http://localhost:8000/api/update/user/${id}`, user) // updates the value toDB
         .then((response) => {
         navigate("/");
         })
         .catch((error) => {
          console.log(error);
         });
       };
      return (
              <div className="addUser">
               <Link to="/" type="button" class="btn btn-primary">
                Back
               </Link>
               <h3>Update User</h3>
               <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                 <label htmlFor="name">Name:</label>
                 <input
                  type="text"
                  id="name"
                  value={user.name}
                  onChange={inputHandler}
                  name="name"
                  autoComplete="off"
                  placeholder="Enter your Name"
                 />
                </div>
                <div className="inputGroup">
                 <label htmlFor="email">E-mail:</label>
               <input
      type="email"
      id="email"
      value={user.email}
      onChange={inputHandler}
      name="email"
      autoComplete="off"
      placeholder="Enter your Email"
     />
    </div>
    <div className="inputGroup">
     <label htmlFor="address">Address:</label>
     <input
      type="text"
      id="address"
      value={user.address}
      onChange={inputHandler}
      name="address"
      autoComplete="off"
      placeholder="Enter your Address"
     />
    </div>
<div className="inputGroup">
     <button type="submit" class="btn btn-primary">
      Submit
     </button>
    </div>
   </form>
  </div>
 );
};
export default UpdateUser;
