import React from 'react';

const Home = ({ openClientForm, openFreelancerForm, openProjectForm }) => {
  return (
    <div>
      <h2>Welcome to Freelancing Project Management</h2>
      <p>Manage your freelancers, clients, and projects efficiently.</p>
      <button onClick={openClientForm}>Add Client</button>
      <button onClick={openFreelancerForm}>Add Freelancer</button>
      <button onClick={openProjectForm}>Add Project</button>
    </div>
  );
};

export default Home;
