import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus nihil minima, corrupti qui, esse voluptas optio rem dignissimos ratione animi nulla quod hic adipisci ducimus facere vitae dolorem sequi.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Nicolas</div>
                    <div>Nov 30 3:20 PM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
