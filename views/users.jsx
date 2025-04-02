import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users List</h2>
      {users.length === 0 ? <p>No users found.</p> : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
