import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <h1>User comp</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>phone</th>
            <th>Website</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Users;
