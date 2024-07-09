import React from 'react';
import './ClientList.css';  // Import a CSS file for styling

const ClientList = ({ clients, openClientForm }) => {
  return (
    <div>
      <h2>Clients</h2>
      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.username}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openClientForm}>Add Client</button>
    </div>
  );
};

export default ClientList;
