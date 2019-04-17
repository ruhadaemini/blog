const initState = {
    projects: [
        {id: '1', title: 'Lorem ipsum', content: ':Lotrm ipsum dolor ist amet'},
        {id: '2', title: 'Lorem ipsum', content: ':Lotrm ipsum dolor ist amet'},
        {id: '3', title: 'Lorem ipsum', content: ':Lotrm ipsum dolor ist amet'},
    ]
}
const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created blog', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;