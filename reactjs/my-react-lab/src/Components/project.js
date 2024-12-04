import React from 'react';
import "../styles/project.css";

const Project = ({ project }) => {
    return (
      <div className="project">
        <h3>{project.name}</h3>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Deadline:</strong> {project.deadline}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${project.projectCompleted}` }}></div>
        </div>
        <div className="project-details">
          <p><strong>Tasks Pending:</strong> {project.tasksPending}</p>
          <p><strong>Hours Worked:</strong> {project.hoursWorked}</p>
        </div>
      </div>
    );
  };
export default Project;
