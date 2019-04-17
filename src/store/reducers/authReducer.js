const initState = {
    authError: null,
    success_message: null,
    sign_out_message: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){

        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            };

        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError: null,
                success_message: 'You are now logged in'
            };

        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                authError: null,
                sign_out_message: 'You are now signed out'
            };
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
};

export default authReducer;