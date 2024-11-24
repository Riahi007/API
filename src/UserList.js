import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setusers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 


  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <div className='container' key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
