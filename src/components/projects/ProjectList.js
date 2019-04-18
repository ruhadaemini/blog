import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

class ProjectList extends Component {
    state = {
        currentPage: 0,
        page_size: 3
    };

    nextPage = () => {

        if (this.state.currentPage < this.state.page_size-1) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    };

    prevPage = () => {

        if (this.state.currentPage > 0) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    };

    goToPage = (number) => {
        this.setState({
            currentPage: number
        })
    };

    render() {
        let projects = this.props.projects;
        let currentPage = this.state.currentPage;
        let page_size = this.state.page_size;

        let projects_items = projects && projects.slice(currentPage * page_size, (currentPage + 1) * page_size).map(project => {
            return(
                <>
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                </>
            )
        });

        return (
            <div className="blog-list section">
                {/*if we have blogs do this:*/}
                {projects_items}
                <nav aria-label="Page navigation example" className="pagination">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="btn page-link" onClick={this.prevPage}>
                                Previous
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="btn page-link" onClick={() => this.goToPage(0)}>
                                1
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="btn page-link" onClick={() => this.goToPage(1)}>
                                2
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="btn page-link" onClick={() => this.goToPage(2)}>
                                3
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="btn btn-link page-link" onClick={this.nextPage}>
                                Next
                            </button>
                        </li>
                    </ul>
                    <br/>
                    <p className="white-text">Page {currentPage+1} / {page_size}</p>
                </nav>

            </div>
        );
    }
}

export default ProjectList;
