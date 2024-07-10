import React from 'react';
import './Home.css';

const Home = ({ openClientForm, openFreelancerForm, openProjectForm }) => {
  return (
    <div className="home-container">
      <h2>Welcome to Freelancing Project Management</h2>
      <p>Manage your freelancers, clients, and projects all in one place.</p>
      <div className="button-group">
        <button onClick={openClientForm}>Add Client</button>
        <button onClick={openFreelancerForm}>Add Freelancer</button>
        <button onClick={openProjectForm}>Add Project</button>
      </div>
    </div>
  );
};

export default Home;
