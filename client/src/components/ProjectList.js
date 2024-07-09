import React from 'react';
import './ProjectList.css';  // Import a CSS file for styling

const ProjectList = ({ projects, openProjectForm }) => {
  return (
    <div>
      <h2>Projects</h2>
      <table className="project-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Freelancer ID</th>
            <th>Client ID</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.rate}</td>
              <td>{project.freelancer_id}</td>
              <td>{project.client_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openProjectForm}>Add Project</button>
    </div>
  );
};

export default ProjectList;
