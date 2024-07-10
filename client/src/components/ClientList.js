import React from 'react';
import './ClientList.css';

const ClientList = ({ clients, openClientForm, handleSuccess }) => {
  const handleEdit = (client) => {
    openClientForm(client);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      fetch(`http://localhost:5555/clients/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            handleSuccess(); // Refresh client list after deletion
          } else {
            throw new Error('Failed to delete client');
          }
        })
        .catch(error => {
          console.error('Error deleting client:', error);
          // Handle error state
        });
    }
  };

  return (
    <div>
      <h2>Clients</h2>
      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.username}</td>
              <td>{client.email}</td>
              <td>
                <button onClick={() => handleEdit(client)}>Edit</button>
                <button onClick={() => handleDelete(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => openClientForm(null)}>Add Client</button>
    </div>
  );
};

export default ClientList;
