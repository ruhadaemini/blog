import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";

const ProjectSummary = (data) => {
    let project = data.project;

    return(
        <div className="card z-depth-0 blog-summary">
            <div className="card-content gray-text text-darken-3">
                <span className="card-title">
                    {project.title}
                </span>
                <div className="bottom-text">
                    <p>Posted By: {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
                    <div className="read-more"> + </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;