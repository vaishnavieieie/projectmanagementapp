import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3 ">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
            <a className="btn btn-secondary" href={`/projects/${project.id}`}>
              View
            </a>
          </div>
          <p className="small text-pri mt-3">Status: {project.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
