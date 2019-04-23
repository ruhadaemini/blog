import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectList extends Component {
    state = {
        currentPage: 0,
        page_size: 3,
        filteredProjects: null
    };

    nextPage = () => {
        if (this.state.currentPage < this.state.page_size - 1) {
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

    goToPage = (currentPage) => {
        this.setState({
            currentPage
        })
    };

    static getDerivedStateFromProps = (props, state) => {
        if (state.filteredProjects !== props.projects) {
            return {
                filteredProjects: state.filteredProjects || props.projects
            }
        }
    };

    handleSearch = (event) => {
        let input_value = event.target.value;

        this.setState({
            filteredProjects: this.props.projects.filter( (project) => project.title.toUpperCase().includes(input_value.toUpperCase())).map( project => {
                return project;
            })
        })

    };

    paginationNumbers = () => {
        let numbers = [];
        for (let i = 1 ; i < this.state.page_size+1; i++) {
            numbers.push(
                <li className="page-item">
                    <button className="btn page-link" onClick={() => this.goToPage(i-1)}>
                        {i}
                    </button>
                </li>
            )
        }
        return numbers;
    };

    render() {

        let {filteredProjects, page_size, currentPage} = this.state;

        let projects_items = filteredProjects && filteredProjects.slice(currentPage * page_size, (currentPage + 1) * page_size).map(project => {
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
                <input type="text" placeholder={'search products'} onChange={this.handleSearch} />

                {/*if we have blogs do this:*/}
                {projects_items}
                <nav aria-label="Page navigation example" className="pagination">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="btn page-link" onClick={this.prevPage}>
                                Previous
                            </button>
                        </li>

                        {this.paginationNumbers()}

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

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy:['createdAt', 'desc']}
    ])
)(ProjectList);
