import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Nicolas</p>
                    <p className="grey-text">Nov 29 11:26 PM</p>
                </div>
            </div>
  )
}

export default ProjectSummary