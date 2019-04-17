import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from "../../store/actions/authActions";
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state={
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()  //prevent the default action when the form gets submited
        this.props.signIn(this.state)
    }

    render() {
        const{ authError, auth } = this.props;

        //if the user is loged in it will redirect you to the dashboard
        if(auth.uid) return <Redirect to='/' />


        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit} className={"white"}>
                    <h5 className={'gray-text text-darken-3'}>Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id={"email"} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id={"password"} onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>

                {/*<h2 className="text-success">*/}
                    {/*{success_message}*/}
                {/*</h2>*/}

                {/*<h2 className="text-success">*/}
                    {/*{sign_out_message}*/}
                {/*</h2>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        //it is in the authreducer auth then in auth error
        authError: state.auth.authError,
        auth: state.firebase.auth
        // success_msg: state.auth.success_message,
        // sign_out_message: state.auth.sign_out_message
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);