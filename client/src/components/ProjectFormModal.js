import React, { useState } from 'react';
import Modal from 'react-modal';

const ProjectFormModal = ({ isOpen, onRequestClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [freelancer_id, setFreelancerId] = useState('');
  const [client_id, setClientId] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = { title, description, rate, freelancer_id, client_id };
    try {
      const response = await fetch('http://localhost:5555/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });
      if (response.ok) {
        onSuccess();
        onRequestClose();
      } else {
        const errorData = await response.json();
        setError('Error creating project: ' + errorData.errors.join(', '));
      }
    } catch (error) {
      setError('Error creating project: ' + error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Project</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <div>
          <label>Freelancer ID</label>
          <input
            type="number"
            value={freelancer_id}
            onChange={(e) => setFreelancerId(e.target.value)}
          />
        </div>
        <div>
          <label>Client ID</label>
          <input
            type="number"
            value={client_id}
            onChange={(e) => setClientId(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ProjectFormModal;
