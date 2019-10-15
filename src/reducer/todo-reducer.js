import * as types from '../actions/actions-types';

const initialState = {
    todos: [
        {
            id: 1,
            message: 'Something'
        },
        {
            id: 2,
            message: 'Not something'
        },
        {
            id: 3,
            message: 'Somebody'
        }
    ]
}

const todoReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_TODO:
            return {...state, todos: state.todos.concat({id: state.todos[state.todos.length - 1].id + 1, message: action.message})};
        case types.DELETE_TODO:
            return {...state, todos: state.todos.filter((item) => item.id !== action.id)};
        default:
            return state;
    }
}

export default todoReducer;