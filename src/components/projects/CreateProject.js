import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state={
        title: '',
        content: '',
        tags: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()  //prevent the default action when the form gets submited
        // console.log(this.state);
        this.props.createProject(this.state);
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} className={"white"}>
                    <h5 className={'gray-text text-darken-3'}>Create a blog</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id={"title"} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Blog Content</label>
                        <textarea id="content" rows="20" cols={"20"} className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="tags">Tag</label>
                        <input type="text" id={"tags"} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
     auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);