import React from 'react';
import moment from 'moment';

const ProjectSummary = (data) => {
    let project = data.project;

    return(
        <div className="card z-depth-0 blog-summary">
            <div className="card-content gray-text text-darken-3">
                    <span className="card-title">
                        {project.title}
                    </span>
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
        </div>
    )
}

export default ProjectSummary;