import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) => {
    return (
        <div className="blog-list section">
            {/*if we have blogs do this:*/}

            { projects && projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;