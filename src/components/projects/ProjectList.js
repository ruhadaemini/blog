import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';



class ProjectList extends Component {
    state = {
        currentPage: 0
    }

    nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    prevPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }

    render() {
        let projects = this.props.projects;
        let currentPage = this.state.currentPage;
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

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="btn page-link" onClick={this.prevPage}>
                                Previous
                            </button>
                        </li>
                        <li className="page-item"><button className="btn page-link" >{currentPage}</button></li>
                        {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                        {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                        <li className="page-item">
                            <button className="btn btn-link page-link" onClick={this.nextPage}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default ProjectList;