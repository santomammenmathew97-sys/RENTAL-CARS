import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/users");
      setUsers(res.data);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/api/delete/user/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    } catch (error) {
      console.log("Delete error", error);
    }
  };

  return (
    <div className="userTable">
      <h3>All Users</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>

              <td>
                {user.image ? (
                  <img
                    src={`http://localhost:8001${user.image}`}
                    alt="user"
                    className="userImg"
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <Link
                  to={`/update/${user._id}`}
                  className="btn btn-info btn-sm"
                >
                  ✏️
                </Link>
                &nbsp;
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user._id)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
