import React from 'react';
import { compose, withProps } from 'recompose';

import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

import { deleteTodo as deleteTodoAction} from '../../actions/todo-actions';

const mapStateToProps = ({todoState: { todos }}) => ({ todos })

const mapDispatchToProps = (dispatch) => (
    {
        deleteTodo: (id) => {
            dispatch(deleteTodoAction(id));
        }
    }
)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(({ todos, deleteTodo, ableEdit }) => {
        return {todos: todos.map(({ message, id }) => <TodoItem message={message} key={id} deleteTodo={deleteTodo} id={id} ableEdit={ableEdit}/>)}
    })
)(TodoList);