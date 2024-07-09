import React from 'react';
import './FreelancerList.css';  // Import a CSS file for styling

const FreelancerList = ({ freelancers, openFreelancerForm }) => {
  return (
    <div>
      <h2>Freelancers</h2>
      <table className="freelancer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {freelancers.map(freelancer => (
            <tr key={freelancer.id}>
              <td>{freelancer.name}</td>
              <td>{freelancer.username}</td>
              <td>{freelancer.email}</td>
              <td>{freelancer.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openFreelancerForm}>Add Freelancer</button>
    </div>
  );
};

export default FreelancerList;
