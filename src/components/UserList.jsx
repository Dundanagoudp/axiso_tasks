import { useEffect, useState } from "react";
import { UserData } from "../api/userapi";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    try {
      const res = await UserData();
      console.log(res);
      
      if (Array.isArray(res)) {
        setUsers(res);
      } else if (res && res.data && Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        console.error("Unexpected response format", res);
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            
            <p><strong>Address:</strong></p>
            <ul>
              <li>Street: {user.address.street}</li>
              <li>Suite: {user.address.suite}</li>
              <li>City: {user.address.city}</li>
              <li>Zipcode: {user.address.zipcode}</li>
              <li className="geo">
                Geo: (Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng})
              </li>
            </ul>
            
            <p><strong>Company:</strong></p>
            <ul>
              <li>Name: {user.company.name}</li>
              <li>CatchPhrase: {user.company.catchPhrase}</li>
              <li>Business: {user.company.bs}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
