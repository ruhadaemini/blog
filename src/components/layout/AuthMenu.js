import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
    let uid = props.uid;
    return (
        <ul className="right">
            {uid ?
                <>
                    <li>
                        <NavLink to='/create'>New Blog</NavLink>
                    </li>
                    <li>
                        <a onClick={props.signOut}>
                            Log Out
                        </a>
                    </li>
                    <li>
                        <NavLink to='/' className='btn btn-floating pink lighten-1'>RE</NavLink>
                    </li>
                </>
                :
                <>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink to='/signin'>Log In</NavLink></li>
                </>
            }
        </ul>
    )
};



const mapStateToProps = (state) => {
    console.log('state', state.firebase.auth.uid)
    return{
        uid: state.firebase.auth.uid
    }
}

const mapDispatchProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(SignedInLinks);