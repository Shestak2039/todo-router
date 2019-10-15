import * as types from './actions-types';

export function addTodo(message) {
    return {
        type: types.ADD_TODO,
        message,
    }
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id,
    }
}