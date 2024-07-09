import React, { useState } from 'react';
import Modal from 'react-modal';

const FreelancerFormModal = ({ isOpen, onRequestClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [rate, setRate] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFreelancer = { name, username, email, rate };
    try {
      const response = await fetch('http://localhost:5555/freelancers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFreelancer),
      });
      if (response.ok) {
        onSuccess();
        onRequestClose();
      } else {
        const errorData = await response.json();
        setError('Error creating freelancer: ' + errorData.errors.join(', '));
      }
    } catch (error) {
      setError('Error creating freelancer: ' + error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Freelancer</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Rate</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default FreelancerFormModal;
